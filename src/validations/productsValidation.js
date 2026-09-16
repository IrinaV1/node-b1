import { Segments, Joi } from 'celebrate';
import { isValidObjectId } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const ValidObjectId = (value, helpers) => {
  return isValidObjectId(value)
    ? value
    : helpers.message('Invalid productId format');
};

export const getAllProductsSchema = {
  [Segments.QUERY]: Joi.object({}),
};

export const getProductByIdSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(ValidObjectId).required(),
  }),
};
export const createProductSchema = {
  [Segments.BODY]: Joi.object({
    tag: Joi.string()
      .valid(...TAGS)
      .optional(),
    name: Joi.string().required(),
    price: Joi.string().required(),
  }),
};

export const updateProductSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(ValidObjectId).required(),
  }),
  [Segments.BODY]: Joi.object({
    tag: Joi.string()
      .valid(...TAGS)
      .optional(),
    name: Joi.string().required(),
    price: Joi.string().required(),
  }),
};
