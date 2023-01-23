import apiHandler from '@config/apiHandler'
import { retrieveComments } from '@controllers/user'

const handler = apiHandler().get(async (request, response) => {
    const { id, offset, limit } = request.query
    const comments = await retrieveComments(id, offset, limit)
    return response.send(comments)
})

export default handler
