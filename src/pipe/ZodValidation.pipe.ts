import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(1111, value, metadata);
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      // console.log(error);
      throw new BadRequestException('Validation');
    }
  }
}
