import { Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct,
  getPopularInTheCommunity,
  uploadProductImage,
  getLimitedEdtionProducts
} from '../controllers/products.controller';
import { use } from '../helpers';
import { paginateMiddleware } from '../middlewares/paginate.middleware';

const productsRouter: Router = Router();

productsRouter.get('/', use(getProducts));
productsRouter.post('/', use(createProduct));
productsRouter.put('/:id', use(uploadProductImage));
productsRouter.use(['/popular', '/limited-edition'], paginateMiddleware);
productsRouter.get('/popular', use(getPopularInTheCommunity));
productsRouter.get('/limited-edition', use(getLimitedEdtionProducts));
productsRouter.get('/:id', use(getProduct));

export default productsRouter;
