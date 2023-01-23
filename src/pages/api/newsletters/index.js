import apiHandler from '@config/apiHandler'
import NewsLetter from '@models/newsletter'
import { newsletterSchema } from '@ajv/schemas'
import { processValidation } from '@ajv/handle'

const handler = apiHandler({
}).get(async (request, response) => {
    const newsletters = await NewsLetter.findAll({})
    return response.send(newsletters)
}).post(async (request, response) => {
    processValidation(newsletterSchema, request.body)
    const { email } = request.body
    const newsletter = await NewsLetter.upsert({
        email
    })
    return response.json(newsletter[0])
})

export default handler
