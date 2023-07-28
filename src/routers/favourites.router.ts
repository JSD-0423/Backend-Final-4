import { Router } from 'express';
import passport from 'passport';
import { setUserId } from '../middlewares/setUserId.middleware';
import { use } from '../helpers';
import {
  getFavouriteProducts,
  toggleFav
} from '../controllers/favourites.controller';

const favRouter: Router = Router();

favRouter.use(passport.authenticate('jwt', { session: false }));
favRouter.use(use(setUserId));

favRouter.get('/', use(getFavouriteProducts));
favRouter.post('/toggle', use(toggleFav));

export default favRouter;
