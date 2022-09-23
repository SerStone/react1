import Joi from "joi";

const postValidator = Joi.object({
    title:Joi.string().regex(/^[a-zA-ZА-яіІїЇєЄ' ']{1,100}$/).required().messages({
        'string.pattern.base':'Only letters from 1 to 20 in sum!'
    }),


    body:Joi.string().regex(/^[a-zA-ZА-яіІїЇєЄ' ']{1,200}$/).required().messages({
        'string.pattern.base':'Only letters from 1 to 20 in sum!'
    })
});


export {postValidator}