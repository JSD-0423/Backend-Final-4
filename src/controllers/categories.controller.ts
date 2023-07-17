import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Category } from '../models';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';
import cloudinary from '../config/cloudinary.config';
import validateCategory from '../validators/category.validator';
import { Params } from '../interfaces';

const getCategories: RequestHandler = async (
  _req: Request,
  res: Response<Category[]>
) => {
  const categories = await Category.findAll();

  res.json(categories);
};

const getCategory: RequestHandler<Params> = async (
  req: Request<Params>,
  res: Response<Category>
) => {
  const { id } = req.params;

  const category = await Category.findByPk(id);

  if (!category)
    throw new CustomError('Category not found', httpStatus.NOT_FOUND);

  res.json(category);
};

const createCategory: RequestHandler<Params, object, Category> = async (
  req: Request<Params, object, Category>,
  res: Response
) => {
  const body = validateCategory(req.body);

  const { name, description } = body;

  if (req.files && req.files.image && !Array.isArray(req.files.image)) {
    const imgTempPath = req.files.image.tempFilePath;
    const result = await cloudinary.uploader.upload(imgTempPath);

    const image = result.url;

    const category = await Category.create({
      name,
      description,
      image
    });

    return res.status(httpStatus.CREATED).json(category);
  }

  res
    .status(httpStatus.UNPROCESSABLE_ENTITY)
    .json({ msg: 'Please upload an image' });
};

export { getCategories, getCategory, createCategory };
