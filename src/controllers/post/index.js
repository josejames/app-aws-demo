import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'

const create = async(user, body) => {
    const postBody = {
        title: body.title,
        slug: body.slug,
        image: body.image,
        content: body.content,
        userId: user.id
    }
    const post = await Post.create(postBody)
    return post
}

const retrieve = async (offset, limit) => {
    const posts = await Post.findAll({
        order: ['id'],
        offset,
        limit,
        include: [
            {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'isAdmin']
                }
            }
        ]
    })
    return posts
}

const retrieveSingle = async (id) => {
    const post = await Post.findByPk(id, {
        include: [
            {
                model: Comment,
                as: 'comments'
            },
            {
                model: User,
                as: 'user',
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
