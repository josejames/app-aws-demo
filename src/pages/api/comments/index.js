import apiHandler from '@config/apiHandler'
import { retrieve } from '@controllers/comments'

const handler = apiHandler({
}).get(async (request, response) => {
    const { offset, limit } = request.query
    const { postId } = request.body
    const comments = await retrieve(postId, offset, limit)
    return response.send(comments)
})

export default handler
