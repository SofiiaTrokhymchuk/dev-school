import { BadRequestException } from '@nestjs/common';

export class InvalidInputException extends BadRequestException {
  constructor(objectOrError?: string | object | any) {
    super(
      objectOrError.map((error) => ({
        field: error.property,
        error: Object.values(error.constraints).join(', '),
      })),
      'Invalid Input',
    );
  }
}
