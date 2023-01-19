import Affinity from '@models/affinity'
import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'

Comment.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Comment, { foreignKey: 'userId' })

User.belongsToMany(Comment, { through: Affinity, foreignKey: 'userId' })
Comment.belongsToMany(User, { through: Affinity, foreignKey: 'commentId' })

Post.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Post, { foreignKey: 'userId' })

export {
    Comment,
    User,
    Post,
    Affinity
}
