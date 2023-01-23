import apiHandler from '@config/apiHandler'
import { retrievePosts } from '@controllers/user'

const handler = apiHandler().get(async (request, response) => {
    const { id, offset, limit } = request.query
    const posts = await retrievePosts(id, offset, limit)
    return response.send(posts)
})

export default handler
