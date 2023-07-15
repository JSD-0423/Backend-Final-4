import { Router } from 'express';
import {
  createCategory,
  getCategories,
  getCategory
} from '../controllers/categories.controller';
import { use } from '../helpers';

const brandsRouter: Router = Router();

brandsRouter.get('/', use(getCategories));
brandsRouter.get('/:id', use(getCategory));
brandsRouter.post('/', use(createCategory));

export default brandsRouter;
