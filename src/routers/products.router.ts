import { Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct,
  getPopularInTheCommunity
} from '../controllers/products.controller';
import { use } from '../helpers';

const productsRouter: Router = Router();

productsRouter.route('/').get(use(getProducts)).post(use(createProduct));
productsRouter.get('/:id', use(getProduct));
productsRouter.get('/popular', use(getPopularInTheCommunity));

export default productsRouter;
