import { NextFunction, Request, RequestHandler, Response } from 'express';
import jwt from 'jsonwebtoken';

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
  const user = jwt.decode(token) as { id: number };
  req.userId = user.id;
  next();
};

export { setUserId };
