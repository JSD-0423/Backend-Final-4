import { Router } from 'express';
import passport from 'passport';
import { setUserId } from '../middlewares/setUserId.middleware';
import { addToCart } from '../controllers/carts.controller';
import { use } from '../helpers';

const cartsRouter: Router = Router();

cartsRouter.use(passport.authenticate('jwt', { session: false }));

cartsRouter.use(use(setUserId));

cartsRouter.post('/add-to-cart', use(addToCart));

export default cartsRouter;
