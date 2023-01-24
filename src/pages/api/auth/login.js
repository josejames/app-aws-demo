import apiHandler from '@config/apiHandler'
import factory from '@config/authConfig'
import { loginSchema } from '@ajv/schemas'
import { processValidation } from '@ajv/handle'

const handler = apiHandler().post(async (request, response) => {
    processValidation(loginSchema, request.body)
    factory.loginHandler(request, response)
})

export default handler
