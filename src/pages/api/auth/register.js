import User from '@models/user'
import apiHandler from '@config/apiHandler'
import factory from '@config/authConfig'

/**
 * Post function to register a new user in the db
 * Also on registered success makes the first login
 */
export default apiHandler().post(async (request, response) => {
    const { email, password, username, lastName, name } = request.body
    const { id } = await User.create({ email, password, name, username, lastName })

    const user = await User.findByPk(id, {
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        }
    })

    if (!user) {
        throw { error_code: 402, message: 'User can not be created or not found' }
    }
    // for login porpuses on the register
    return await factory.loginHandler(request, response)
})
