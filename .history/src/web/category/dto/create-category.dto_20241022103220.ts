import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @Api
  @IsString()
  id: string;
  @IsString()
  name: string;
}
