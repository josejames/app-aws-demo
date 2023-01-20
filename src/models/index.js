import Affinity from '@models/affinity'
import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'
import Newsletter from '@models/newsletter'

Comment.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Comment, { foreignKey: 'userId' })

User.belongsToMany(Comment, { through: Affinity, foreignKey: 'userId' })
Comment.belongsToMany(User, { through: Affinity, foreignKey: 'commentId' })

Post.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Post, { foreignKey: 'userId' })

Comment.belongsTo(Post, { foreignKey: 'postId' })
Post.hasMany(Comment, { foreignKey: 'postId' })

export {
    Comment,
    User,
    Post,
    Affinity,
    Newsletter
}
