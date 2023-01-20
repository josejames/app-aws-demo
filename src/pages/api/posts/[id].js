import apiHandler from '@config/apiHandler'
import { retrieveSingle } from '@controllers/post'

const handler = apiHandler({
}).get(async (request, response) => {
    const { id } = request.query

    const post = await retrieveSingle(id)
    return response.send(post)
})

export default handler
