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

const postSchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        content: { type: 'string' },
        slug: { type: 'string' }
    },
    required: ['title', 'content', 'slug'],
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

const loginSchema = {
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' }
    },
    required: ['username', 'password'],
    additionalProperties: false
}

const voteSchema = {
    type: 'object',
    properties: {
        affinity: { type: 'number' }
    },
    required: ['affinity'],
    additionalProperties: false
}

const newsletterSchema = {
    type: 'object',
    properties: {
        email: { type: 'string' }
    },
    required: ['email'],
    additionalProperties: false
}

module.exports = {
    postSchema,
    newsletterSchema,
    loginSchema,
    voteSchema,
    userSchema,
    commmentSchema
}
