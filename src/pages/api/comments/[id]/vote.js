import apiHandler from '@config/apiHandler'
import { retrieve, vote } from '@controllers/comments'
import factory from '@config/authConfig'

const handler = apiHandler({
}).get(async (request, response) => {
    const { id, offset, limit } = request.query
    const comments = await retrieve(id, offset, limit)

    return response.send(comments)
}).post(factory.middleware, async (request, response) => {
    const { id } = request.query
    const { affinity } = request.body
    const result = await vote(id, request.user.id, affinity)

    return response.json(result)
})

export default handler
