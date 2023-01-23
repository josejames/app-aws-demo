import Post from '@models/post'

const checkPostOwner = async (request, response, next) => {
    const post = await Post.findOne({
        where: {
            userId: request.user.id,
            id: request.query.id
        }
    })

    if (!post) {
        throw { message: 'you are not allowed to move this resource', error_code: 403 }
    }
    next()
}

export default checkPostOwner
