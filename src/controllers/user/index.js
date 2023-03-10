import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'

const create = async(body) => {
}

const retrieve = async () => {
    const users = await User.findAll({
        order: ['id'],
        attributes: {
            exclude: ['password', 'isAdmin']
        }
    })
    return users
}

const retrieveSingle = async (id) => {
    const user = await User.findByPk(id, {
        include: [
            {
                model: Post,
                as: 'posts',
                attributes: ['id', 'title', 'slug', 'image']
            }
        ],
        attributes: {
            exclude: ['password']
        }
    })
    return user
}

const retrieveComments = async (id, offset, limit) => {
    const comments = await Comment.findAll({
        where: {
            userId: id
        },
        offset,
        limit
    })
    return comments
}

const retrievePosts = async (id, offset, limit) => {
    const posts = await Post.findAll({
        where: {
            userId: id
        },
        offset,
        limit
    })
    return posts
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
    retrieveComments,
    retrievePosts,
    update,
    destroy
}
