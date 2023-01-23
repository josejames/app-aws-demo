import apiHandler from '@config/apiHandler'
import { retrieveSingle, update } from '@controllers/post'

const handler = apiHandler({
}).get(async (request, response) => {
    const { id } = request.query

    const post = await retrieveSingle(id)
    return response.send(post)
}).put(async (request, response) => {
    const { body } = request
    const { id } = request.query
    const post = await update(id, body)
    return response.send(post)
})

export default handler
