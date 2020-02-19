const Joi = require('@hapi/joi');

const schema = Joi.object({
        userame: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'aol', 'ua'] } })
    })
    // .with('username', 'birth_year')
    // schema.validate({ username: 'abc', birth_year: 1994 });
    // -> { value: { username: 'abc', birth_year: 1994 } }
    // schema.validate({});
    // -> { value: {}, error: '"username" is required' }
module.exports = schema;