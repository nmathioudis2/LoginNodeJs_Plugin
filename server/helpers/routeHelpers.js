const JoiDate =require('@hapi/joi-date');
const JoiBase = require('@hapi/joi');

const Joi = JoiBase.extend(JoiDate);
module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result =  schema.validate(req.body);
            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            name: Joi.string().required(),
            surname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            confirmPassword: Joi.string().required(),
            staff: Joi.string().required()
        }),
        authSignInSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }),

        patientSchema: Joi.object().keys({
            name: Joi.string().required(),
            surname: Joi.string().required(),
            age: Joi.number().required(),
            firstEntryDate: Joi.date().format("YYYY/MM/DD").required()
        })
    }
};