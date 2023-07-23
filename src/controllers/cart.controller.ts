import { Request, RequestHandler, Response } from 'express';
import { User } from '../models';

const addToCart: RequestHandler = async (req: Request, res: Response) => {
  const userId = req.userId;
  const user = await User.findByPk(userId);

  const cart = await user!.getCart();
  console.log(cart);

  res.json(user);
};

export { addToCart };
