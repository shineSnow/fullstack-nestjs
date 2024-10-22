import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  id: string;
  name: string;
}
