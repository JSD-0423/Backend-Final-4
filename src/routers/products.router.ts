import { Response, Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct,
  getPopularInTheCommunity,
  uploadProductImage,
  getLimitedEdtionProducts,
  getHandpickedCollections
} from '../controllers/products.controller';
import { use } from '../helpers';
import { paginateMiddleware } from '../middlewares/paginate.middleware';

const productsRouter: Router = Router();

productsRouter.use(
  ['/popular', '/limited-edition', '/', '/handpicked-collections'],
  paginateMiddleware
);
productsRouter.get('/', use(getProducts));
productsRouter.post('/', use(createProduct));
productsRouter.get(
  '/popular',
  paginateMiddleware,
  use(getPopularInTheCommunity)
);
productsRouter.get(
  '/limited-edition',
  paginateMiddleware,
  use(getLimitedEdtionProducts)
);
productsRouter.get(
  '/handpicked-collections',
  paginateMiddleware,
  use(getHandpickedCollections)
);
productsRouter.put('/:id', use(uploadProductImage));
productsRouter.get('/:id', use(getProduct));

export default productsRouter;
