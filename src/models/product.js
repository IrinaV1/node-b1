import { model, Schema } from "mongoose";
import { CATEGORIES } from "../constants/tags.js";

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: CATEGORIES, required: true, default: 'other' },
    description: { type: String}
}, {
    timestamps: true
});


export const Product = model('Product', productSchema);