import apiHandler from '@config/apiHandler'
import { retrieve, create } from '@controllers/user'

const handler = apiHandler().get(async (request, response) => {
    const users = await retrieve()
    return response.send(users)
}).post(async (request, response) => {
    const body = request.body
    const user = await create(body)
    return response.json(user)
})

export default handler
