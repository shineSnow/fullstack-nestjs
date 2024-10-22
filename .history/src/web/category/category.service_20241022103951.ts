import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import * as schema from '../../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('DB_PROD') private drizzleClient: NodePgDatabase<typeof schema>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const res = await this.drizzleClient
      .insert(schema.categories)
      .values(createCategoryDto)
      .returning();
    return res[0] ?? null;
  }

  async findAll() {
    const res = await this.drizzleClient.select().from(schema.categories);
    return res;
  }

  async findOne(id: number) {
    const category = await this.drizzleClient
      .select()
      .from(schema.categories)
      .where(eq(schema.categories.id, id))
      .then((res) => res[0] ?? null);
    return category[0] ?? null;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
