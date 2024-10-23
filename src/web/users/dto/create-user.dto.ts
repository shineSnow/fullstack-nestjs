import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: '姓名',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'demoemail@qq.com',
    description: '邮件',
    required: true,
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: 'password',
    description: '密码',
    required: true,
  })
  @IsString()
  password: string;
}
