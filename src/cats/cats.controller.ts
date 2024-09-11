import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { ZodValidationPipe } from 'src/pipe/ZodValidation.pipe';
import { CreateCatDto, createCatSchema } from './dto/create-cat-schema';
import * as schema from '../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateBookDto, createBookSchema } from './dto/create-book-schema';

@Controller('cats')
export class CatsController {
  constructor(
    @Inject('DB_PROD') private drizzleService: NodePgDatabase<typeof schema>,
    private catsService: CatsService,
  ) {}

  @Post()
  async create(
    @Query() query: any,
    @Body(new ZodValidationPipe(createCatSchema)) createCatDto: CreateCatDto,
  ): Promise<any> {
    this.catsService.create(createCatDto as Cat);
    return {
      data: `This action adds a new cat ${query.name}  ${query.age}`,
      body: createCatDto,
    };
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get(':id')
  // async findOne() {
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  // }

  @Get('books')
  async getBooks() {
    const books = await this.drizzleService.select().from(schema.books);
    return { books };
  }

  @Post('books')
  async createBook(
    @Body(new ZodValidationPipe(createBookSchema)) body: CreateBookDto,
  ) {
    const book = await this.drizzleService
      .insert(schema.books)
      .values({
        title: body.title,
        author: body.author,
        published: body.published,
      })
      .returning({ id: schema.books.id });
    return book;
  }

  @Post('books/:id')
  /**
   * Updates an existing book in the database.
   *
   * @param id - The ID of the book to update.
   * @param body - The updated book data.
   * @returns The updated book.
   */
  async updateBook(@Param('id') id: number, @Body() body: CreateBookDto) {
    const book = await this.drizzleService.update(schema.books).set({
      title: body.title,
      author: body.author,
    });
  }
}
