import { Request, RequestHandler, Response } from 'express';
import { User } from '../models';
import { CREATED } from 'http-status';

const addToCart: RequestHandler<
  object,
  object,
  { productId: number; quantity: number }
> = async (
  req: Request<object, object, { productId: number; quantity: number }>,
  res: Response
) => {
  const { productId, quantity } = req.body;

  const userId = req.userId;
  const user = await User.findByPk(userId);

  const cart = await user!.getCart();
  const cartItems = await cart.$get('cartItems');

  const hasProduct = cartItems.find(
    cartItem => cartItem.product_id === productId
  );

  if (hasProduct) {
    hasProduct.quantity += quantity;
    await hasProduct.save();
  } else {
    cart.addCartItem({ productId, quantity });
  }

  await cart.updateTotalPrice();

  res.status(CREATED).json({ msg: 'Item added successfully' });
};

export { addToCart };
