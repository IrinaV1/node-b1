import {Joi, Segments} from 'celebrate';

export const registerUsersSchema = {
    [Segments.BODY]:Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})
};

export const loginUsersSchema = {
    [Segments.BODY]:Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})
};