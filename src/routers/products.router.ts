import { Router } from 'express';
import { getProduct, getProducts, createProduct } from '../controllers/products.controller';

const productsRouter: Router = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);


export default productsRouter;