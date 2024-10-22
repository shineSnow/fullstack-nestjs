import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import * as schema from '../../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('DB_PROD') private drizzleClient: NodePgDatabase<typeof schema>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const res = await this.drizzleClient
      .insert(schema.categories)
      .values(createCategoryDto);
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
