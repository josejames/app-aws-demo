import User from '@models/user'
import apiHandler from '@config/apiHandler'

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

    return response.json(user)
})
