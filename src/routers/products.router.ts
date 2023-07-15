import { Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct,
  uploadProductImage
} from '../controllers/products.controller';
import { use } from '../helpers';

const productsRouter: Router = Router();

productsRouter.route('/').get(use(getProducts)).post(use(createProduct));
productsRouter.route('/:id').get(use(getProduct)).put(use(uploadProductImage));

export default productsRouter;
