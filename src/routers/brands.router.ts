import { Router } from 'express';
import {
  createCategory,
  getCategories,
  getCategory
} from '../controllers/categories.controller';
import { use } from '../helpers';

const brandsRouter: Router = Router();

brandsRouter.route('/').get(use(getCategories)).post(use(createCategory));
brandsRouter.get('/:id', use(getCategory));

export default brandsRouter;
