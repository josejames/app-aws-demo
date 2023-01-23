import apiHandler from '@config/apiHandler'
import { retrieve, create } from '@controllers/comments'
import factory from '@config/authConfig'

const handler = apiHandler({
}).get(async (request, response) => {
    const { id, offset, limit } = request.query
    const comments = await retrieve(id, offset, limit)
    return response.send(comments)
}).post(factory.middleware, async (request, response) => {
    const { id } = request.query
    const body = request.body
    const user = request.user
    const post = await create(user.id, id, body)

    return response.json(post)
})

export default handler
