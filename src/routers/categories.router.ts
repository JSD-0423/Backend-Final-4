import { Router } from 'express';
import {
  createCategory,
  getCategory,
  getCategories
} from '../controllers/categories.controller';
import { use } from '../helpers';

const categoriesRouter: Router = Router();

categoriesRouter.route('/').get(use(getCategories)).post(use(createCategory));
categoriesRouter.get('/:id', use(getCategory));

export default categoriesRouter;
