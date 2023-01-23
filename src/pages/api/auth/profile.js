import apiHandler from '@config/apiHandler'
import auth from '@config/authConfig'

const handler = apiHandler()
    .use(auth.middleware)
    .get(async (request, response) => {
        const user = request.user

        return response.json(user)
    })

export default handler
