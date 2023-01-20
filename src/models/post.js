import { DataTypes } from 'sequelize'
import sequelize from '@config/database'

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT
    },
    tags: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    }
})

export default Post
