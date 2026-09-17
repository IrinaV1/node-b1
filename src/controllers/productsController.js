import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getAllProducts = async (req, res) => {
  const { page = 1, perPage = 10, category, search } = req.query;
  const skip = (page - 1) * perPage;

  const productsQuery = Product.find();

  if (category) {
    productsQuery.where('category').equals(category);
  }
  if (search) {
    productsQuery.where({ name: { $regex: search, $options: 'i' } });
  }

  const [totalProducts, products] = await Promise.all([
    productsQuery.clone().countDocuments(),
    productsQuery.skip(skip).limit(perPage),
  ]);
  const totalPages = Math.ceil(totalProducts / perPage);
  res.status(200).json({ page, perPage, totalProducts, totalPages, products });
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await Product.create(product);

  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const product = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });

  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(productId);

  if (!deletedProduct) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json(deletedProduct);
};
