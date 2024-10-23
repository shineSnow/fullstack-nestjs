import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryToBookDto } from './dto/create-category-to-book.dto';
import { UpdateCategoryToBookDto } from './dto/update-category-to-book.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../db/schema';
import { and, eq, or } from 'drizzle-orm';

@Injectable()
export class CategoryToBookService {
  constructor(
    @Inject('DB_PROD') private drizzleClient: NodePgDatabase<typeof schema>,
  ) {}
  async create(createCategoryToBookDto: CreateCategoryToBookDto) {
    const res = await this.drizzleClient
      .insert(schema.categoriesBooks)
      .values(createCategoryToBookDto)
      .returning()
      .then((res) => res[0] ?? null);
    return res;
  }

  async findAll() {
    const res = await this.drizzleClient.select().from(schema.categoriesBooks);
    return res;
  }

  async findOne(bookId: number, categoryId: number) {
    const res = await this.drizzleClient
      .select()
      .from(schema.categoriesBooks)
      .where(
        or(
          bookId ? eq(schema.categoriesBooks.bookId, bookId) : undefined,
          categoryId
            ? eq(schema.categoriesBooks.categoryId, categoryId)
            : undefined,
        ),
      );
    return res;
  }

  update(id: number, updateCategoryToBookDto: UpdateCategoryToBookDto) {
    return `This action updates a #${id} categoryToBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryToBook`;
  }
}
