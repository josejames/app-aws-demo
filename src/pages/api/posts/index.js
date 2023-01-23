import apiHandler from '@config/apiHandler'
import { retrieve, create } from '@controllers/post'
import factory from '@config/authConfig'
import { postSchema } from '@ajv/schemas'
import { processValidation } from '@ajv/handle'

const handler = apiHandler({
}).get(async (request, response) => {
    const { offset, limit } = request.query
    const posts = await retrieve(offset, limit)
    return response.send(posts)
}).post(factory.middleware, async (request, response) => {
    processValidation(postSchema, request.body)
    const body = request.body
    const user = request.user
    const post = await create(user, body)

    return response.json(post)
})

export default handler
