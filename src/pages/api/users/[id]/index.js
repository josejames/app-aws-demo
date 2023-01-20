import apiHandler from '@config/apiHandler'
import { retrieveSingle, update } from '@controllers/user'

const handler = apiHandler().get(async (request, response) => {
    const { id } = request.query
    const user = await retrieveSingle(id)
    return response.send(user)
}).put(async (request, response) => {
    const { id } = request.query
    const body = request.body
    const user = await update(id, body)
    return response.json(user)
})

export default handler
