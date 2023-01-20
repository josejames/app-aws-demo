import apiHandler from '@config/apiHandler'
import NewsLetter from '@models/newsletter'

const handler = apiHandler({
}).get(async (request, response) => {
    const newsletters = await NewsLetter.findAll({})
    return response.send(newsletters)
}).post(async (request, response) => {
    const { email } = request.body
    const newsletter = await NewsLetter.create({
        email
    })
    return response.json(newsletter)
})

export default handler
