import nextConnect from 'next-connect'
import dbConnection from '@middlewares/dbConnection'

// eslint-disable-next-line no-extend-native
BigInt.prototype.toJSON = function() {
    return Number(this.toString())
}

export default function apiHandler() {
    return nextConnect({
        onError: (error, request, response) => {
            console.error(error)
            response.status(error.error_code || 501).json({
                code: error.error_code || 501,
                message: error.message,
                errors: [
                    {
                        code: error.error_code || 501,
                        mesage: error.message,
                        stackTrace: error
                    }
                ]
            })
        },
        onNoMatch: (request, response) => {
            response.status(405).json({
                code: 405,
                message: 'Method not Allowed'
            })
        }
    }).use(dbConnection)
}
