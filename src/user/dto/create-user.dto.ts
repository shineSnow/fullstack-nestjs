import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  name: string;
  @ApiProperty({ description: '邮箱' })
  email: string;
  @ApiProperty({ description: '密码' })
  password: string;
}
