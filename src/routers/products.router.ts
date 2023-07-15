import { Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct
} from '../controllers/products.controller';
import { use } from '../helpers';

const productsRouter: Router = Router();

productsRouter.route('/').get(use(getProducts)).post(use(createProduct));
productsRouter.get('/:id', use(getProduct));

export default productsRouter;
