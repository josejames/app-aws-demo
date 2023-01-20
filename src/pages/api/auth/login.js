import apiHandler from '@config/apiHandler'
import factory from '@config/authConfig'

const handler = apiHandler().post(factory.loginHandler)

export default handler
