import { DataTypes } from 'sequelize'
import sequelize from '@config/database'

const Comment = sequelize.define('Comment', {
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dislikes: {
        type: DataTypes.INTEGER,
        unique: true
    },
    parentId: {
        type: DataTypes.INTEGER
    },
    level: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    }
})

export default Comment
