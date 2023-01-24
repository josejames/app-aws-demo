import { DataTypes } from 'sequelize'
import sequelize from '@config/database'

const Comment = sequelize.define('Comment', {
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    parentId: {
        type: DataTypes.INTEGER
    },
    isParent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    level: {
        type: DataTypes.SMALLINT,
        defaultValue: 1
    }
})

export default Comment
