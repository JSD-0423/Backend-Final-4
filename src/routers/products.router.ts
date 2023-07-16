import { Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct,
  getPopularInTheCommunity,
  uploadProductImage
} from '../controllers/products.controller';
import { use } from '../helpers';

const productsRouter: Router = Router();

productsRouter.get('/', use(getProducts));
productsRouter.post('/', use(createProduct));
productsRouter.get('/:id', use(getProduct));
productsRouter.put('/:id', use(uploadProductImage));
productsRouter.get('/popular', use(getPopularInTheCommunity));

export default productsRouter;
