import Affinity from '@models/affinity'
import Comment from '@models/comment'
import Post from '@models/post'
import User from '@models/user'
import { AFFINATIONS } from '@utils/constants/affinations'
import sequelize from '@config/database'

const create = async(userId, postId, body) => {
    let level = 1
    let parent = null

    if (body.parentId) {
        parent = await Comment.findByPk(body.parentId)
        level = parent.level + 1
        if (level > 2) {
            throw { message: 'You can only comment on first level comments', error_code: 424 }
        }
        if (!parent) {
            throw { message: 'Comment parent does not exists', error_code: 424 }
        }
        parent.isParent = true
        await parent.save()
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

const vote = async (id, userId, affinity) => {
    const t = await sequelize.transaction()

    try {
        // Then, we do some calls passing this transaction as an option:
        const comment = await Comment.findByPk(id)

        if (!comment) {
            throw { message: 'This message was not found', error_code: 404 }
        }

        let lastVote = await Affinity.findOne({
            where: {
                userId,
                commentId: id
            }
        })

        if (!lastVote) {
            if (affinity === AFFINATIONS.REMOVE) {
                const mock = { affinity: 0, commentId: id, userId }
                return { mock, comment }
            }
            lastVote = await Affinity.create({
                commentId: id,
                userId,
                affinity
            })
            if (affinity === AFFINATIONS.LIKE) {
                comment.likes = comment.likes + 1
            }
            if (affinity === AFFINATIONS.DISLIKE) {
                comment.dislikes = comment.dislikes + 1
            }
            await comment.save()
            return { lastVote, comment }
        } else {
            // There is already marked as that, so do nothing
            if (affinity === lastVote.affinity) {
                return { lastVote, comment }
            }

            // if need to remove, check the lastVote and remove accordly
            if (affinity === AFFINATIONS.REMOVE) {
                if (lastVote.affinity === AFFINATIONS.DISLIKE) {
                    // return { hey: 'in here 1' }
                    comment.dislikes = comment.dislikes - 1
                } else if (lastVote.affinity === AFFINATIONS.LIKE) {
                    // return { hey: 'in here 2' }
                    comment.likes = comment.likes - 1
                }

                lastVote.affinity = affinity
                await comment.save()
                await lastVote.save()
                return { lastVote, comment }
            }

            if (lastVote.affinity === AFFINATIONS.REMOVE) {
                // there was already a dislike then
                if (affinity === AFFINATIONS.LIKE) {
                    comment.likes = comment.likes + 1
                } else {
                    comment.dislikes = comment.dislikes + 1
                }
            } else if (lastVote.affinity === AFFINATIONS.DISLIKE) {
                // there was already a dislike then
                if (affinity === AFFINATIONS.LIKE) {
                    // move vote to like,
                    // then --dislike, and ++like
                    comment.dislikes = comment.dislikes - 1
                    comment.likes = comment.likes + 1
                }
            } else if (lastVote.affinity === AFFINATIONS.LIKE) {
                if (affinity === AFFINATIONS.DISLIKE) {
                    // move vote to dislike
                    // then dislike++, and like--
                    comment.dislikes = comment.dislikes + 1
                    comment.likes = comment.likes - 1
                }
            }

            lastVote.affinity = affinity
            await comment.save()
            await lastVote.save()
        }

        await t.commit()
        return { lastVote, comment }
    } catch (error) {
        // We rollback the transaction.
        await t.rollback()
        throw { message: 'Something happend on the vote transaction', error_code: 409, error }
    }
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
    vote,
    update,
    destroy
}
