import sequelize from '@config/database'
// eslint-disable-next-line no-unused-vars
import models from '@models/index'

const dbConnection = async (request, response, next) => {
    try {
        await sequelize.authenticate()
        // await sequelize.sync()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
        throw { error_code: 512, message: 'Unable to connect to the database', error }
    }
    next()
}

export default dbConnection
