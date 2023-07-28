import { Request, RequestHandler, Response } from 'express';
import { FavouriteList, Product, User } from '../models';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';

const toggleFav: RequestHandler<object, object, { productId: number }> = async (
  req: Request<object, object, { productId: number }>,
  res: Response
) => {
  const { productId } = req.body;

  const userId = req.userId;

  const user = await User.findByPk(userId);
  const product = await Product.findByPk(productId);

  if (!user) throw new CustomError('User not found', httpStatus.NOT_FOUND);
  if (!product)
    throw new CustomError('Product not found', httpStatus.NOT_FOUND);

  const isProductInFavorites = await user.$has('favouriteList', product);

  if (isProductInFavorites) {
    await user.$remove('favouriteList', product);
    res
      .status(httpStatus.OK)
      .json({ message: 'Product removed from favorites' });
  } else {
    await user.$add('favouriteList', product);
    res.status(httpStatus.OK).json({ message: 'Product added to favorites' });
  }
};

const getFavouriteProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId;

  const user = await User.findByPk(userId);
  if (!user) throw new CustomError('User not found', httpStatus.NOT_FOUND);

  const products = await Product.findAll({
    include: {
      model: User,
      attributes: [],
      where: {
        id: userId
      }
    }
  });

  res.status(httpStatus.OK).json(products);
};

export { toggleFav, getFavouriteProducts };
