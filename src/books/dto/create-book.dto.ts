import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: '书名',
    example: '阿里巴巴与四十大盗',
    required: true,
  })
  title: string;

  @ApiProperty({
    description: '作者姓名',
    example: '张三',
    required: true,
  })
  author: string;

  @ApiProperty({
    description: '是否已出版',
    example: false,
    required: true,
  })
  published: boolean;
}
