import Joi from "joi";

const commentValidator = Joi.object({

    name:Joi.string().regex(/^[a-zA-ZА-яіІїЇєЄ' ']{1,20}$/).required().messages({
        'string.pattern.base':'Only letters from 1 to 20 in sum!'
    }),

    email:Joi.string().regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).required().messages({
        'string.pattern.base':'Only letters from 1 to 20 in sum!'
    })

})


export {commentValidator}