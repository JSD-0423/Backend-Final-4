import { Router } from 'express';
import { test } from '../controllers/test.controller';

export const testRouter: Router = Router();

testRouter.get('', test);