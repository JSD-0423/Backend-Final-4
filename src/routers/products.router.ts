import { Router } from 'express';
import { getProduct, getProducts, getProductReviews } from '../controllers/products.controller';

const productsRouter: Router = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.get('/:id/reviews', getProductReviews);

export default productsRouter;