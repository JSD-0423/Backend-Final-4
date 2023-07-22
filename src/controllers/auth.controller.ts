import { NextFunction, Request, RequestHandler, Response } from 'express';
import { User } from '../models';
import { validateUser } from '../validators';
import { Payload } from '../interfaces';
import httpStatus from 'http-status';

const signUp: RequestHandler<object, object, User> = async (
  req: Request<object, object, User>,
  res: Response
) => {
  validateUser(req.body);
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  const payload: Payload = {
    id: user.id,
    name: user.name,
    email: user.email
  };

  res.status(httpStatus.CREATED).json(payload);
};

export { signUp };
