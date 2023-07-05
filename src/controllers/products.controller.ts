import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Product, Review } from '../models';
import { Sequelize } from 'sequelize';


const getProducts: RequestHandler = async (
  _req: Request, 
  res: Response<Product[]>, 
  next: NextFunction,
) => {
  try {
    const products = await Product.findAll(
      {
        include: {
          model: Review,
          attributes: [],
        },
        attributes: [
          'id',
          'name',
          'description',
          'color',
          'price',
          'discount',
          [Sequelize.fn('AVG', Sequelize.col('rating')), 'ratings']
        ],
        group: ['Product.id']
      },
    );
    res.json(products);
  } catch(e) {
    console.log(e);
    next(e);
  }
};

export { getProducts };