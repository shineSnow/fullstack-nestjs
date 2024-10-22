import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
}
