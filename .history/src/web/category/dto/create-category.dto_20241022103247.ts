import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: '分类名称',
    example: '小说',
    required: true,
  })
  @IsString()
  id: string;
  @ApiProperty({
    description: '分类名称',
    example: '小说',
    required: true,
  })
  @IsString()
  name: string;
}
