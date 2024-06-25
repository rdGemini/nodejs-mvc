const Joi = require('joi');

const userValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        age: Joi.number().integer().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().pattern(new RegExp('^[0-9]{5}$')).required()
    });
    return schema.validate(data);
};

const userIdValidation = (params) => {
    const schema = Joi.object({
        userId: Joi.string().required()
    });
    return schema.validate(params);
};

module.exports = {
    userValidation,
    userIdValidation
};
