import nextConnect from 'next-connect'
import dbConnection from '@middlewares/dbConnection'

// BigInt.prototype.toJSON = function() {
//     return Number(this.toString())
// }

export default function apiHandler() {
    return nextConnect({
        onError: (error, request, response) => {
            console.error(error)
            if (error.error_code) {
                response.status(error.error_code).json(
                    error
                )
            } else {
                response.status(501).json({
                    code: 501,
                    message: error.message,
                    errors: [{ code: error.code ?? 501, mesage: error.message }]
                })
            }
        },

        onNoMatch: (request, response) => {
            response.status(405)
            response.json({ message: 'Method not allowed' })
        }
    }).use(dbConnection)
}
