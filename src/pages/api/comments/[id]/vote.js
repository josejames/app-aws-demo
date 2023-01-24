import apiHandler from '@config/apiHandler'
import { vote } from '@controllers/comments'
import factory from '@config/authConfig'
import { voteSchema } from '@ajv/schemas'
import { processValidation } from '@ajv/handle'

const handler = apiHandler({}).post(factory.middleware, async (request, response) => {
    const { id } = request.query
    processValidation(voteSchema, request.body)
    const { affinity } = request.body
    const result = await vote(id, request.user.id, affinity)

    return response.json(result)
})

export default handler
