import { NextFunction, Request, RequestHandler, Response } from 'express';

export const test: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: 'Succeed' });
};