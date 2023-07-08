import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Product, Review } from '../models';
import { Sequelize } from 'sequelize';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';

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
        include: [[Sequelize.literal('(SELECT AVG(`rating`) FROM `reviews` WHERE `reviews`.`product_id` = `Product`.`id`)'), 'rating'],]
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

export { getProducts, getProduct };