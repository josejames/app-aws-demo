import apiHandler from '@config/apiHandler'
import { retrieveSingle } from '@controllers/comments'

const handler = apiHandler({
}).get(async (request, response) => {
    const { id } = request.query
    const comment = await retrieveSingle(id)

    return response.send(comment)
})

export default handler
