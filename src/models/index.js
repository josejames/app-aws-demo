import Affinity from '@models/affinity'
import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'
import Newsletter from '@models/newsletter'

Comment.belongsTo(User, { foreignKey: 'userId', as: 'user' })
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' })

User.belongsToMany(Comment, { through: Affinity, foreignKey: 'userId' })
Comment.belongsToMany(User, { through: Affinity, foreignKey: 'commentId' })

Post.belongsTo(User, { foreignKey: 'userId', as: 'user' })
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' })

Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' })
Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' })

export {
    Comment,
    User,
    Post,
    Affinity,
    Newsletter
}
