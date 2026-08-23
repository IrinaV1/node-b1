import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from "../controllers/productsController.js";

 const productsRoutes = Router();

productsRoutes.get('/products', getAllProducts);

productsRoutes.get('/products/:productId', 
    getProductById);

productsRoutes.post('/products', createProduct);

productsRoutes.patch('/products/:productId', updateProduct);

productsRoutes.delete('/products/:productId', deleteProduct)
export default productsRoutes;