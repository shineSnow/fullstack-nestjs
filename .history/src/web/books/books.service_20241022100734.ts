import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../db/schema';
import { eq, sql } from 'drizzle-orm';

@Injectable()
export class BooksService {
  constructor(
    @Inject('DB_PROD') private drizzleClient: NodePgDatabase<typeof schema>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    const res = await this.drizzleClient
      .insert(schema.books)
      .values(createBookDto)
      .returning({ id: schema.books.id });
    return res[0] ?? null;
  }

  async findAll(pageNum: number, pageSize: number) {
    const offset = (pageNum - 1) * pageSize;
    const total = await this.drizzleClient
      .select({ count: sql<number>`count(*)` })
      .from(schema.books);
    const books = await this.drizzleClient
      .select()
      .from(schema.books)
      .orderBy(schema.books.id)
      .limit(pageSize)
      .offset(offset);
    return { books, total: books?.length ?? 0, pageNum, pageSize, total };
  }

  async findOne(id: number) {
    const book = await this.drizzleClient
      .select()
      .from(schema.books)
      .where(eq(schema.books.id, id));
    return book[0] ?? null;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const res = await this.drizzleClient
      .update(schema.books)
      .set(updateBookDto)
      .where(eq(schema.books.id, id))
      .returning({ id: schema.books.id });
    return res[0] ?? null;
  }

  async remove(id: number) {
    const res = await this.drizzleClient
      .delete(schema.books)
      .where(eq(schema.books.id, id))
      .returning({ id: schema.books.id });
    return res[0] ? true : false;
  }
}
