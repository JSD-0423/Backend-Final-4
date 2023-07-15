import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Product } from '../models';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';
import cloudinary from '../config/cloudinary.config';

export interface Params {
  id: number;
}

const getProducts: RequestHandler = async (
  _req: Request,
  res: Response<Product[]>,
  next: NextFunction
) => {
  const products = await Product.findAll();

  res.json(products);
};

const getProduct: RequestHandler<Params> = async (
  req: Request<Params>,
  res: Response<Product>,
  next: NextFunction
) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

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
export { getProducts, getProduct, createProduct };
