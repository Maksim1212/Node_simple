const Joi = require('@hapi/joi');

// schema validation with two parameters
const creationSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'aol', 'ua'] } })
        .min(5)
        .max(45)
        .required(),
    fullName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
});

// schema validation with one parameter
const findSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'aol', 'ua'] } })
        .min(5)
        .max(45)
        .required()
});

module.exports = { creationSchema, findSchema };