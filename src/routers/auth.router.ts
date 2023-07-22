import { Router } from 'express';
import { use } from '../helpers';
import { signUp } from '../controllers/auth.controller';

const authRouter: Router = Router();

authRouter.post('/signup', use(signUp));

export default authRouter;
