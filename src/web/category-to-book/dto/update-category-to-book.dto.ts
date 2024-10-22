import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryToBookDto } from './create-category-to-book.dto';

export class UpdateCategoryToBookDto extends PartialType(CreateCategoryToBookDto) {}
