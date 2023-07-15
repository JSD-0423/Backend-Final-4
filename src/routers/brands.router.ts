import { Router } from 'express';
import { use } from '../helpers';
import {
  createBrand,
  getBrand,
  getBrands
} from '../controllers/brands.controller';

const brandsRouter: Router = Router();

brandsRouter.route('/').get(use(getBrands)).post(use(createBrand));
brandsRouter.get('/:id', use(getBrand));

export default brandsRouter;
