import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCategoryToBookDto {
  @ApiProperty({
    example: 1,
    description: '书籍 id',
    required: false,
  })
  @IsNumber()
  bookId: number;
  @ApiProperty({
    example: 1,
    description: '分类 id',
    required: false,
  })
  @IsNumber()
  categoryId: number;
}
