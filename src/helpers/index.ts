import { NextFunction, Request, RequestHandler, Response } from 'express';

const use =
  <P, ResBody, ReqBody>(fn: RequestHandler<P, ResBody, ReqBody>) =>
  (req: Request<P, ResBody, ReqBody>, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export { use };
