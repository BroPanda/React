import Joi from "joi";


export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp(`^[a-zA-Z]*$`)).required().messages('string'),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages(),
    price: Joi.number().min(0).max(10000000).required().messages(),
})