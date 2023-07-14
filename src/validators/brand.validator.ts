import Joi from 'joi';
import { CustomValidationError } from '../middlewares/errors';
import { Category } from './category.validator';

export type Brand = Category;

const BrandSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  descritpion: Joi.string().required()
});

const validateBrand = (body: Brand) => {
  const { error } = BrandSchema.validate(body);
  if (error) {
    throw new CustomValidationError('Invalidated Fields', error.details);
  }
};

export default validateBrand;
