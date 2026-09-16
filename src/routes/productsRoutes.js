import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController.js';
import { celebrate } from 'celebrate';
import {
  createProductSchema,
  getAllProductsSchema,
  getProductByIdSchema,
  updateProductSchema,
} from '../validations/productsValidation.js';

const productsRoutes = Router();

productsRoutes.get(
  '/products',
  celebrate(getAllProductsSchema),
  getAllProducts,
);

productsRoutes.get(
  '/products/:productId',
  celebrate(getProductByIdSchema),
  getProductById,
);

productsRoutes.post('/products', celebrate(createProductSchema), createProduct);

productsRoutes.patch(
  '/products/:productId',
  celebrate(updateProductSchema),
  updateProduct,
);

productsRoutes.delete(
  '/products/:productId',
  celebrate(getProductByIdSchema),
  deleteProduct,
);
export default productsRoutes;
