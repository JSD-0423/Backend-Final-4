import { Request, Response, Router } from 'express';
import { getProducts } from '../controllers/products.controller';

const productsRouter: Router = Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', (req: Request, res: Response) => {
  console.log(req);
});

export default productsRouter;