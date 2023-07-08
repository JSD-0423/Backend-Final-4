import { ValidationError, ValidationErrorItem } from 'sequelize';

export class CustomError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}

export class CustomValidationError extends ValidationError {
  statusCode: number;

  constructor(message: string, errors: ValidationErrorItem[]) {
    super(message, errors);
    this.statusCode = 422;
  }
}