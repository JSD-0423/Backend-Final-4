import Joi from 'joi';
import { CustomValidationError } from '../middlewares/errors';

export interface User {
  name: string;
  password: string;
  email: string;
}

const UserSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required()
});

const validateUser = (body: User) => {
  const { error } = UserSchema.validate(body);
  if (error) {
    throw new CustomValidationError('Invalidated Fields', error.details);
  }
};

export default validateUser;
