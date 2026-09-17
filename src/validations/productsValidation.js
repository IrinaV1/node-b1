import { Segments, Joi } from 'celebrate';
import { isValidObjectId } from 'mongoose';
import { CATEGORIES } from '../constants/categories.js';

const ValidObjectId = (value, helpers) => {
  return isValidObjectId(value)
    ? value
    : helpers.message('Invalid productId format');
};

export const getAllProductsSchema = {
  [Segments.QUERY]: Joi.object({
    category: Joi.string().valid(...CATEGORIES),
    search: Joi.string().trim().allow(''),
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
  }),
};

export const getProductByIdSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(ValidObjectId).required(),
  }),
};
export const createProductSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
    category: Joi.string()
      .valid(...CATEGORIES)
      .default('other')
      .optional(),
    description: Joi.string().allow(''),
  }),
};

export const updateProductSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(ValidObjectId).required(),
  }),
  [Segments.BODY]: Joi.object({
    category: Joi.string()
      .valid(...CATEGORIES)
      .optional(),
    name: Joi.string().required(),
    price: Joi.string().required(),
  }).min(1),
};
