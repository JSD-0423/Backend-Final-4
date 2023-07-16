import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Brand, Category, Product, ProductImages } from '../models';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';
import cloudinary from '../config/cloudinary.config';
import { Op } from 'sequelize';
import { paginate } from '../helpers/pagination';
import { validateProduct } from '../validators';
import { Product as ProductDTO } from '../validators/product.validator';

export interface Params {
  id: number;
}

const getProducts: RequestHandler = async (
  _req: Request,
  res: Response<Product[]>
) => {
  const products = await Product.findAll({ include: { model: ProductImages } });

  res.json(products);
};

const getProduct: RequestHandler<Params> = async (
  req: Request<Params>,
  res: Response<Product>
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
  req: Request<object, object, ProductDTO>,
  res: Response
) => {
  const body = validateProduct(req.body);

  const category = await Category.findByPk(body.category_id);
  const brand = await Brand.findByPk(body.brand_id);

  if (!category)
    throw new CustomError('Category not found', httpStatus.NOT_FOUND);
  if (!brand) throw new CustomError('Brand not found', httpStatus.NOT_FOUND);

  const product = await Product.create({
    ...body
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

const uploadProductImage: RequestHandler<Params> = async (
  req: Request<Params>,
  res: Response
) => {
  const { id } = req.params;
  if (req.files && req.files.image && !Array.isArray(req.files.image)) {
    const imgTempPath = req.files.image.tempFilePath;
    const result = await cloudinary.uploader.upload(imgTempPath);

    const image = result.url;
    const product = await Product.findByPk(id, {
      include: { model: ProductImages }
    });

    if (!product)
      throw new CustomError('Product not found', httpStatus.NOT_FOUND);

    await product.addImage(image);

    return res
      .status(httpStatus.CREATED)
      .json({ msg: 'Uploaded successfully' });
  }

  res
    .status(httpStatus.UNPROCESSABLE_ENTITY)
    .json({ msg: 'Please upload an image' });
};

export {
  getProducts,
  getProduct,
  createProduct,
  getPopularInTheCommunity,
  uploadProductImage
};
