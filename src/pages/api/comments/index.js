import apiHandler from '@config/apiHandler'
import { retrieve, create } from '@controllers/comments'
import factory from '@config/authConfig'

const handler = apiHandler({
}).get(async (request, response) => {
    const { offset, limit } = request.query
    const { postId } = request.body
    const comments = await retrieve(postId, offset, limit)
    return response.send(comments)
}).post(factory.middleware, async (request, response) => {
    const body = request.body
    const user = request.user
    const post = await create(user, body)

    return response.json(post)
})

export default handler
