import { NextFunction, Request, RequestHandler, Response } from 'express';
import jwt from 'jsonwebtoken';
import { CustomError } from './errors';
import { UNAUTHORIZED } from 'http-status';

declare global {
  namespace Express {
    interface Request {
      userId: number;
    }
  }
}

const setUserId: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  if (!token) next(new CustomError('Unauthenticated', UNAUTHORIZED));
  const user = jwt.decode(token) as { id: number };
  req.userId = user.id;
  next();
};

export { setUserId };
