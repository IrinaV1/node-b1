import {Joi, Segments} from 'celebrate';
import { CATEGORIES } from '../constants/tags.js';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
    return !isValidObjectId(value) ? helpers.message('Invalid ID format') : value;
}

export const getAllProductsSchema = {
    [Segments.QUERY]: Joi.object({
        category: Joi.string().valid(...CATEGORIES),
        search: Joi.string().trim().allow(''),
page: Joi.number().integer().min(1).default(1),
perPage: Joi.number().integer().min(5).max(20).default(10),
    })
}

export const productIdSchema = {
    [Segments.PARAMS]: Joi.object({
        productId: Joi.string().custom(objectIdValidator).required(),
    })
}