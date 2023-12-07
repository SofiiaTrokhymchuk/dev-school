/* eslint-disable @typescript-eslint/ban-types */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ValidatorOptions, validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
}

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  constructor(private readonly options?: ValidationPipeOptions) {}

  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value, this.options);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed', {
        cause: errors,
      });
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
