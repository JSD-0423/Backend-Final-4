import { Router } from 'express';
import passport, { use } from 'passport';
import { setUserId } from '../middlewares/setUserId.middleware';
import { addToCart } from '../controllers/cart.controller';

const cartsRouter: Router = Router();

cartsRouter.use(passport.authenticate('jwt', { session: false }));

cartsRouter.use(setUserId);

cartsRouter.post('/add-to-cart', addToCart);

export default cartsRouter;
