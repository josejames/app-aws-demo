import { authFactory } from 'utils/simple-auth-next'
import database from 'config/database'
import User from '@models/user'
import library from 'sequelize'

const factory = authFactory({
    sequelize: database,
    library,
    userModel: User,
    options: {
        maxSessionsPerUser: 3,
        invalidateOldestSession: true,
        maxLoginAttempts: 5,
        expiration: process.env.NEXT_PUBLIC_SESSION_DURATION || '200m',
        jwtSecret: 'Q2FiYWxsbyBob21vc2V4dWFsIGRlIGxhcyBtb250YW5hcw==',
        appName: 'Ultron Blog'
    }
})

export default factory
