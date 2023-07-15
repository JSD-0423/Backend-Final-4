import { Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct
} from '../controllers/products.controller';
import { use } from '../helpers';

const productsRouter: Router = Router();

productsRouter.get('/', use(getProducts));
productsRouter.get('/:id', use(getProduct));
productsRouter.post('/', use(createProduct));

export default productsRouter;
