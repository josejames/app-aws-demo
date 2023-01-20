import { DataTypes } from 'sequelize'
import sequelize from '@config/database'

const Newsletter = sequelize.define('Newsletter', {
    email: {
        type: DataTypes.STRING,
        unique: true
    }
})

export default Newsletter
