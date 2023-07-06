import { Router } from 'express';
import { getProducts } from '../controllers/products.controller';

const productsRouter: Router = Router();

productsRouter.get('/', getProducts);

export default productsRouter;