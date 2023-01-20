import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'

const create = async(userId, postId, body) => {
    let level = 1
    let parent = null

    if (body.parentId) {
        parent = await Comment.findByPk(body.parentId)
        level = parent.level + 1
    }

    const commentBody = {
        content: body.content,
        postId,
        userId,
        parentId: parent ? parent.id : null,
        level
    }

    const comment = await Comment.create(commentBody)
    return comment
}

const retrieve = async (postId, offset, limit) => {
    // TODO: read and create the levels on the comments
    const comments = await Comment.findAll({
        order: ['id'],
        where: {
            postId
        },
        level: 1,
        offset,
        limit,
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'lastName']
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
