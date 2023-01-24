import Sequelize from 'sequelize'
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
    // TODO: on create make a little resume for the text
    const posts = await Post.findAll({
        order: ['id'],
        offset,
        limit,
        attributes: ['id', [Sequelize.fn('SUBSTRING', Sequelize.col('content'), 0, 120), 'content']],
        include: [
            {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'isAdmin', 'status']
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
                as: 'comments',
                where: {
                    level: 1
                },
                attributes: {
                    exclude: ['userId', 'postId']
                },
                include: [
                    {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'name', 'lastName', 'username']
                    }
                ]
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
    const post = await Post.findByPk(id)
    if (!post) {
        throw { message: 'post not found to update', error_code: 404 }
    }

    post.title = body.title ?? post.title
    post.slug = body.slug ?? post.slug
    post.content = body.content ?? post.content

    await post.save()
    return post
}

const destroy = async (id) => {
    return 'not yet implemented'
}

const comments = async (id, offset, limit) => {
    const firstLevel = await Comment.findAll({
        order: ['createdAt'],
        where: {
            postId: id,
            level: 1
        },
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

    for (const comment of firstLevel) {
        if (comment.isParent) {
            const responses = await Comment.findAll({
                where: {
                    parentId: comment.id
                },
                include: [
                    {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'name', 'lastName']
                    }
                ]
            })
            comment.setDataValue('responses', responses)
        }
    }

    return firstLevel
}

export {
    create,
    retrieve,
    retrieveSingle,
    comments,
    update,
    destroy
}
