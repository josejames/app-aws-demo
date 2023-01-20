import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'

const create = async(userId, postId, body) => {
    const commentBody = {
        content: body.content,
        postId,
        userId
    }
    const comment = await Comment.create(commentBody)
    return comment
}

const retrieve = async (postId, offset, limit) => {
    const comments = await Comment.findAll({
        order: ['id'],
        where: {
            postId
        },
        include: [
            {
                model: User
            }
        ]
    })
    return comments
}

const retrieveSingle = async (id) => {
    const post = await Post.findByPk(id, {
        include: [
            {
                model: Comment
            },
            {
                model: User,
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'isAdmin']
                }
            }
        ]
    })
    return post
}

const update = async (id, body) => {
    return 'not yet implemented'
}

const destroy = async (id) => {
    return 'not yet implemented'
}

export {
    create,
    retrieve,
    retrieveSingle,
    update,
    destroy
}
