import { DataTypes } from 'sequelize'
import sequelize from '@config/database'
import bcryptjs from 'bcryptjs'

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    password: {
        type: DataTypes.STRING,
        set(value) {
            this.setDataValue('password', bcryptjs.hashSync(value, 10))
        },
        get() {
            return this.getDataValue('password')
        }
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
{
    scopes: {
        withoutPassword: {
            attributes: {
                exclude: ['password']
            }
        }
    }
})

export default User
