import { Router } from 'express';
import {
  createCategory,
  getCategory,
  getCategories
} from '../controllers/categories.controller';
import { use } from '../helpers';

const categoriesRouter: Router = Router();

categoriesRouter.get('/', use(getCategories));
categoriesRouter.post('/', use(createCategory));
categoriesRouter.get('/:id', use(getCategory));

export default categoriesRouter;
