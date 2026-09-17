import { model, Schema } from 'mongoose';
import { CATEGORIES } from '../constants/categories.js';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: CATEGORIES,
      default: 'other',
    },
    description: {
      type: String,
      // default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model('Product', productSchema);
