import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'

const create = async(user, body) => {
    const slug = await Post.findOne({
        where: {
            slug: body.slug
        }
    })

    if (slug) {
        throw { message: 'Slug already exists', error_code: 409 }
    }

    // let subtring = body.content.substring(250)
    const subtring = body.content.replace(/(<([^>]+)>)/ig, '')
    let resume

    if (subtring.length > 128) {
        resume = subtring.substring(0, 127)
    } else {
        resume = subtring
    }

    console.log('resume', resume)
    console.log('resume', resume.length)
    const postBody = {
        title: body.title,
        slug: body.slug,
        image: body.image,
        content: body.content,
        userId: user.id,
        resume
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
        attributes: {
            exclude: ['content']
        },
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
    console.log('id', id)
    const post = await Post.findByPk(id, {
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
    return post
}

const update = async (id, body) => {
    const post = await Post.findByPk(id)
    if (!post) {
        throw { message: 'post not found to update', error_code: 404 }
    }

    post.title = body.title ?? post.title
    post.content = body.content ?? post.content

    await post.save()
    return post
}

const destroy = async (id) => {
    const post = await Post.findByPk(id)

    if (!post) {
        throw { message: 'Post not found', error_code: 404 }
    }

    try {
        // delete comments
        await Comment.destroy({
            where: {
                postId: post.id
            }
        })

        await Post.destroy({
            where: {
                id: post.id
            }
        })

        return true
    } catch (error) {
        return false
    }
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
