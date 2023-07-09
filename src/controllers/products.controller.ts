import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Product, Review } from '../models';
import { Sequelize, ValidationError } from 'sequelize';
import { CustomError, CustomValidationError } from '../middlewares/errors';
import httpStatus from 'http-status';
import cloudinary from '../config/cloudinary.config';

export interface Params {
  id: number
}


const getProducts: RequestHandler = async (
  _req: Request, 
  res: Response<Product[]>, 
  next: NextFunction,
) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Review,
        attributes: [],
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
        include: [[Sequelize.literal('(SELECT COALESCE(AVG(`rating`), 0) FROM `reviews` WHERE `reviews`.`product_id` = `Product`.`id`)'), 'rating']]
      }
    });

    res.json(products);
  } catch(e) {
    console.log(e);
    next(e);
  }
};

const getProduct: RequestHandler<Params> =async (
  req: Request<Params>,
  res: Response<Product>,
  next:NextFunction
) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, {
      include: {
        model: Review,
        attributes: [],
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
        include: [[Sequelize.literal('(SELECT AVG(`rating`) FROM `reviews` WHERE `reviews`.`product_id` = `Product`.`id`)'), 'rating'],]
      }
    });

    if(!product) throw new CustomError('Product not found', httpStatus.NOT_FOUND);

    res.json(product);
  } catch(e) {
    next(e);
  }
};

const getProductReviews: RequestHandler<Params> =async (
  req: Request<Params>,
  res: Response<Review[]>,
  next:NextFunction
) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, {
      include: {
        model: Review,
      },
    });

    if(!product) throw new CustomError('Product not found', httpStatus.NOT_FOUND);

    res.json(product.reviews);
  } catch(e) {
    next(e);
  }
};

const createProduct: RequestHandler = async (req: Request<object, object, Product>, res: Response, next: NextFunction) => {
  try {
    const { name, description, discount, color, price } = req.body;

    if(req.files && req.files.img && !Array.isArray(req.files.img)) {
      console.log(req.files.img);
      const imgTempPath = req.files.img.tempFilePath;
      const result = await cloudinary.uploader.upload(imgTempPath);

      const image = result.url;
      const product = await Product.create({ name, description, discount, color, price, image});

      res.status(httpStatus.CREATED).json(product);
    }
  } catch(e) {
    console.log(e);
    if (e instanceof ValidationError) {
      return next(new CustomValidationError('Invalidated Fields', e.errors));
    }
    next(e);
  }
};
export { getProducts, getProduct, getProductReviews, createProduct };