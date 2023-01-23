import apiHandler from '@config/apiHandler'
import { create } from '@controllers/comments'
import factory from '@config/authConfig'
import { comments } from '@controllers/post'
import { commmentSchema } from '@ajv/schemas'
import { processValidation } from '@ajv/handle'

const handler = apiHandler({
}).get(async (request, response) => {
    const { id, offset, limit } = request.query
    const result = await comments(id, offset, limit)
    return response.send(result)
}).post(factory.middleware, async (request, response) => {
    processValidation(commmentSchema, request.body)
    const { id } = request.query
    const body = request.body
    const user = request.user
    const post = await create(user.id, id, body)

    return response.json(post)
})

export default handler
