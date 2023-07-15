import { NextFunction, Request, Response, Router } from 'express';
import {
  getProduct,
  getProducts,
  createProduct
} from '../controllers/products.controller';
import { RequestHandler } from 'express-serve-static-core';

const productsRouter: Router = Router();

const use =
  <P, ResBody, ReqBody>(fn: RequestHandler<P, ResBody, ReqBody>) =>
  (req: Request<P, ResBody, ReqBody>, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

productsRouter.get('/', use(getProducts));
productsRouter.get('/:id', use(getProduct));
productsRouter.post('/', use(createProduct));

export default productsRouter;
