import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().regex(/^[a-zA-ZА-яіІїЇєЄ]{1,20}$/).required().messages({
        'string-pattern.base':'Only Letters'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1999).max(new Date().getFullYear()).required()
})

export {carValidator};