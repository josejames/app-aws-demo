const transactionSchema = {
    type: 'object',
    properties: {
        asset: { type: 'string' },
        quantity: { type: 'number', minimum: 0 },
        price_per_coin: { type: 'number' },
        total_spent: { type: 'number' },
        date: { type: 'string' },
        type: { type: 'string', enum: ['buy', 'sell'] },
        portfolio_id: { type: 'string' }
    },
    required: ['asset', 'quantity', 'price_per_coin', 'total_spent', 'date', 'type', 'portfolio_id'],
    additionalProperties: false
}

const portfolioSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' }
    },
    required: ['name'],
    additionalProperties: false
}

const userSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        username: { type: 'string' }
    },
    required: ['name', 'email', 'password', 'username'],
    additionalProperties: true
}

const commmentSchema = {
    type: 'object',
    properties: {
        content: { type: 'string' }
    },
    required: ['content'],
    additionalProperties: true
}

module.exports = { transactionSchema, portfolioSchema, userSchema, commmentSchema }
