const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const twofactor = require('node-2fa')
// const requestIp = require('request-ip')

const authFactory = ({ library, sequelize, userModel, options }) => {
    let session = null
    const getAuthUser = () => {
        return session?.authUser
    }

    const setSession = (newSession) => {
        session = newSession
    }

    const getSession = () => {
        return session
    }

    class Session extends library.Model {

    }

    class AuthUser extends library.Model {
        async verifyPassword(password) {
            return await bcrypt.compare(password, this.User.password)
        }

        async login(req) {
            // User and password are correct, now check if max sessions is reached
            await this.checkForSessions()
            this.lastLoginAt = new Date()
            const sessionName = req.headers['user-agent']
            // let remoteIp = requestIp.getClientIp(req)
            const remoteIp = 'n/a'
            const expiration = new Date()
            const expirationNumber = options.expiration.split('m')[0]

            expiration.setSeconds(expiration.getSeconds() + (expirationNumber * 65))
            const session = await this.createSession(
                { name: sessionName, remoteIp, expiration })
            const token = jwt.sign(session.toJSON(), options.jwtSecret, { expiresIn: options.expiration })
            return { token, session }
        }

        async enable2FA() {
            if (this.confirmed2FA) {
                throw { message: '2FA is already enabled', error_code: 400 }
            }
            const secret = twofactor.generateSecret({ name: options.appName, account: this.User.email })
            this.secret2FA = secret.secret
            await this.save()
            return secret
        }

        async disable2FA() {
            this.secret2FA = null
            this.confirmed2FA = false
            await this.save()
        }

        async checkForSessions() {
            if (options.maxSessionsPerUser == null) {
                return
            }
            const sessions = await Session.findAll({
                where: {
                    authUserId: this.id
                },
                order: [['createdAt', 'ASC']]
            })
            let sessionCount = sessions.length
            if (options.invalidateOldestSession && sessionCount >= options.maxSessionsPerUser) {
                await sessions[0].destroy()
                sessionCount--
            }
            if (sessions && sessionCount >= options.maxSessionsPerUser) {
                throw { message: 'Max sessions reached, you need to logout in some other device', error_code: 401 }
            }
        }

        async checkForMaxLoginAttempts() {

        }

        async confirm2FA(otp) {
            if (!this.secret2FA) {
                throw { message: 'You need to enable 2fa before to confirm', error_code: 400 }
            }

            if (this.confirmed2FA) {
                throw { message: '2FA is already enabled', error_code: 400 }
            }
            this.verifyOTP(otp)
            this.confirmed2FA = true
            await this.save()
        }

        verifyOTP(otp) {
            const verified = twofactor.verifyToken(this.secret2FA, otp, 2)
            if (!verified) {
                throw { message: 'Invalid OTP', error_code: 400 }
            }
            if (verified.delta < 0) {
                throw { message: 'OTP is expired', error_code: 400 }
            }
        }
    }

    AuthUser.init({
        id: { type: library.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        lastLoginAt: { type: library.DataTypes.DATE, defaultValue: library.DataTypes.NOW },
        secret2FA: { type: library.DataTypes.STRING },
        confirmed2FA: { type: library.DataTypes.BOOLEAN, defaultValue: false },
        userId: {
            type: library.DataTypes.INTEGER,
            references: {
                model: userModel,
                key: 'id'
            }
        }
    }, { sequelize, modelName: 'authUser' })

    Session.init({
        id: { type: library.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        authUserId: {
            type: library.DataTypes.INTEGER,
            references: {
                model: AuthUser,
                key: 'id'
            }
        },
        name: { type: library.DataTypes.STRING },
        remoteIp: { type: library.DataTypes.STRING },
        expiration: {
            type: library.DataTypes.DATE
        }
    }, { sequelize, modelName: 'session' })

    userModel.hasOne(AuthUser, { foreignKey: 'userId' })
    AuthUser.belongsTo(userModel, { foreignKey: 'userId' })
    AuthUser.hasMany(Session, { foreignKey: 'authUserId' })
    Session.belongsTo(AuthUser, { foreignKey: 'authUserId' })

    const middleware = async (req, res, next) => {
        let token = req.headers.token || req.headers.authorization

        if (token) {
            token = token.replace('Bearer ', '')
            let decoded = null
            try {
                decoded = jwt.verify(token, options.jwtSecret)
            } catch (error) {
                throw { message: error.message, error_code: 401 }
            }

            const session = await Session.findByPk(decoded.id, {
                include: {
                    model: AuthUser,
                    include: {
                        model: userModel
                    }
                }
            })
            if (session) {
                req.session = session
                req.authUser = session.authUser
                req.user = session.authUser.User
                setSession(session)
            } else {
                throw { message: 'The provided token is not assigned to any session', error_code: 401 }
            }
        } else {
            throw { message: 'Token is not in the headers', error_code: 401 }
        }

        return next()
    }

    const authenticate = async (credentials) => {
        let user = null

        user = await userModel.findOne({
            where: { username: credentials.username }
        })

        if (!user) {
            throw new Error('User not found', { message: 'User not found', error_code: 400 })
        }

        let authUser = await AuthUser.findOne({ where: { userId: user.id }, include: { model: userModel } })
        if (!authUser) {
            authUser = await AuthUser.create({ userId: user.id })
            authUser = await AuthUser.findOne({ where: { userId: user.id }, include: { model: userModel } })
        }

        // TODO: check for max login attempts and block user if too many attempts
        // await authUser.checkForMaxLoginAttempts()

        if (!(await authUser.verifyPassword(credentials.password))) {
            throw { message: 'Wrong password', error_code: 400 }
        }

        // Check for 2FA
        if (authUser.confirmed2FA) {
            if (!credentials.otp) {
                throw { message: '2FA is enabled, you need to provide an OTP', error_code: 400 }
            }
            await authUser.verifyOTP(credentials.otp)
        }

        return { authUser, user }
    }

    const loginHandler = async (req, res) => {
        const { username, password, otp } = req.body
        // Get AuthUser from credentials, this method will check if max_login_attempts is reached and if so, locks the user for a while
        const { authUser, user } = await authenticate({ username, password, otp })
        // User has been authenticated, create a session for the user
        const { token, session } = await authUser.login(req)
        user.setDataValue('password')
        user.setDataValue('createdAt')
        user.setDataValue('updatedAt')
        user.setDataValue('isAdmin')
        user.setDataValue('token', token)
        user.setDataValue('session', session)
        // let user = await authUser.getUser({ attributes: ['id', 'email'] })
        return res.json(user)
        // return res.json({ token, user, session })
    }

    const refreshHandler = async (req, res) => {
        let token = req.headers.token || req.headers.authorization
        let temp
        if (token) {
            token = token.replace('Bearer ', '')
            let decoded = null
            try {
                decoded = jwt.verify(token, options.jwtSecret)
            } catch (error) {
                throw { message: error.message, error_code: 401 }
            }

            const session = await Session.findByPk(decoded.id, {
                include: {
                    model: AuthUser,
                    include: {
                        model: userModel
                    }
                }
            })

            if (session) {
                token = jwt.sign(session.toJSON(), options.jwtSecret, { expiresIn: options.expiration })
                // console.log(session)
                temp = new Date()
                // console.log('in here ', session.expiration)
                const expirationNumber = options.expiration.split('m')[0]

                temp = temp.setSeconds(temp.getSeconds() + (expirationNumber * 60))
                session.expiration = temp
                req.session = session
                req.authUser = session.authUser
                // req.user = session.authUser.User
                await session.save()
                setSession(session)
            } else {
                throw { message: 'The provided token is not assigned to any session', error_code: 401 }
            }
        } else {
            throw { message: 'Token is not in the headers', error_code: 401 }
        }

        return res.json({ token, expiration: session.expiration })
    }

    const logoutHandler = async (req, res) => {
        const { session } = req
        await session.destroy()

        return res.status(200).json({
            message: 'Session deleted successfully'
        })
    }

    const confirm2faHandler = async (req, res) => {
        const { otp } = req.body

        if (!otp) {
            throw { message: 'Missing OTP', error_code: 400 }
        }
        const authUser = getAuthUser()
        await authUser.confirm2FA(otp)
        return res.status(200).json({ message: '2FA is enabled' })
    }

    const enable2faHandler = async (req, res) => {
        const { password } = req.body

        if (!password) {
            throw { message: 'Missing password', error_code: 400 }
        }

        const authUser = getAuthUser()
        if (!await authUser.verifyPassword(password)) {
            throw { message: 'Invalid password', error_code: 400 }
        }

        const secret = await authUser.enable2FA()

        return res.status(200).json(secret)
    }

    const disable2FAHandler = async (req, res) => {
        const { password } = req.body
        if (!password) {
            throw { message: 'Missing password', error_code: 400 }
        }
        const authUser = getAuthUser()
        if (!await authUser.verifyPassword(password)) {
            throw { message: 'Invalid password', error_code: 400 }
        }
        await authUser.disable2FA()
        return res.status(200).json({ message: '2FA is disabled' })
    }

    return {
        AuthUser,
        Session,
        middleware,
        authenticate,
        getAuthUser,
        getSession,
        loginHandler,
        logoutHandler,
        enable2faHandler,
        confirm2faHandler,
        disable2FAHandler,
        refreshHandler
    }
}

module.exports.authFactory = authFactory
