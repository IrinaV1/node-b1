import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from "../controllers/productsController.js";
import { celebrate } from "celebrate";
import { getAllProductsSchema, productIdSchema } from "../validations/productsValidations.js";

 const productsRoutes = Router();

productsRoutes.get('/products',celebrate(getAllProductsSchema), getAllProducts);

productsRoutes.get('/products/:productId', celebrate(productIdSchema), getProductById);

productsRoutes.post('/products', createProduct);

productsRoutes.patch('/products/:productId', updateProduct);

productsRoutes.delete('/products/:productId', celebrate(productIdSchema), deleteProduct)
export default productsRoutes;