import apiHandler from 'config/apiHandler'
import factory from 'config/authConfig'

const handler = apiHandler().use(factory.middleware).post(factory.logoutHandler)

export default handler
