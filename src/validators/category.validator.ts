import Joi from 'joi';
import { CustomValidationError } from '../middlewares/errors';

export interface Category {
  name: string;
  description: string;
}

const CategorySchema = Joi.object({
  name: Joi.string().alphanum().required(),
  descritpion: Joi.string().required()
});

const validateCategory = (body: Category) => {
  const { error } = CategorySchema.validate(body);
  if (error) {
    throw new CustomValidationError('Invalidated Fields', error.details);
  }
};

export default validateCategory;
