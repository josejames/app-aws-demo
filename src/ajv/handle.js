import ajv from './config'

function processValidation(schema, body) {
    const validate = ajv.compile(schema)
    const valid = validate(body)
    if (!valid) {
        const messages = validate.errors.map(error => {
            let message = {}
            if (error.message === 'must be number') {
                message = { [error.data]: error.message }
            } else if (error.message === 'must NOT have additional properties') {
                message = { [error.params.additionalProperty]: error.message }
            } else if (error.message === 'must be equal to one of the allowed values') {
                message = { [error.data]: error.message + ' [' + error.params.allowedValues + ']' }
            } else if (error.keyword === 'minimum' || error.keyword === 'maximum') {
                message = { [error.data]: error.message }
            } else {
                message = { [error.params.missingProperty]: error.message }
            }
            return message
        })
        throw { error_code: 424, message: messages }
    }
    return true
}

module.exports = { processValidation }
