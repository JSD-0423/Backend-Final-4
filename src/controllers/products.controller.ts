import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Product, ProductImages } from '../models';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';
import cloudinary from '../config/cloudinary.config';
import { Op } from 'sequelize';
import { paginate } from '../helpers/pagination';

export interface Params {
  id: number;
}

const getProducts: RequestHandler = async (
  _req: Request,
  res: Response<Product[]>,
  next: NextFunction
) => {
  const products = await Product.findAll({ include: { model: ProductImages } });

  res.json(products);
};

const getProduct: RequestHandler<Params> = async (
  req: Request<Params>,
  res: Response<Product>,
  next: NextFunction
) => {
  const { id } = req.params;

  const product = await Product.findByPk(id, {
    include: { model: ProductImages }
  });

  if (!product)
    throw new CustomError('Product not found', httpStatus.NOT_FOUND);

  res.json(product);
};

const createProduct: RequestHandler = async (
  req: Request<object, object, Product>,
  res: Response,
  next: NextFunction
) => {
  const { name, description, discount, color, price } = req.body;

  const product = await Product.create({
    name,
    description,
    discount,
    color,
    price
  });

  res.status(httpStatus.CREATED).json(product);
};

const getPopularInTheCommunity: RequestHandler<
  object,
  object,
  Product[],
  { page: number; perPage: number }
> = async (
  req: Request<object, object, Product[], { page: number; perPage: number }>,
  res: Response,
  next: NextFunction
) => {
  const page = req.query.page ?? 1;
  const perPage = req.query.perPage ?? 1;
  const { count, rows } = await Product.findAndCountAll({
    include: {
      model: ProductImages
    },
    where: {
      rating: {
        [Op.gte]: 4.5
      }
    },
    offset: (page - 1) * page,
    limit: perPage,
    distinct: true
  });

  const result = paginate({
    data: rows,
    count,
    page,
    perPage
  });

  return result;
};

export { getProducts, getProduct, createProduct, getPopularInTheCommunity };
