import createHttpError from "http-errors";
import { Product } from "../models/product.js";


export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
}

export const getProductById = async (req, res) => {
    const {productId} = req.params;
    const product = await Product.findById(productId);
if(!product){
    throw createHttpError(404, 'Product not found');
}
    res.status(200).json(product);
}

export const createProduct = async (req, res) => {
    const product = req.body;
const newProduct = await Product.create(product)

    res.status(201).json(newProduct)
}

export const updateProduct = async (req, res) => {
    const {productId} = req.params;
const product = req.body;
const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true });

res.status(200).json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
    const {productId} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);

if(!deletedProduct){
    throw createHttpError(404, 'Product not found')
}

    res.status(200).json(deletedProduct);
}