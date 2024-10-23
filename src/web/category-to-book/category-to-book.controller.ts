import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryToBookService } from './category-to-book.service';
import { CreateCategoryToBookDto } from './dto/create-category-to-book.dto';
import { UpdateCategoryToBookDto } from './dto/update-category-to-book.dto';
import { number } from 'zod';

@Controller('category-to-book')
export class CategoryToBookController {
  constructor(private readonly categoryToBookService: CategoryToBookService) {}

  @Post()
  create(@Body() createCategoryToBookDto: CreateCategoryToBookDto) {
    return this.categoryToBookService.create(createCategoryToBookDto);
  }

  @Get()
  findAll() {
    return this.categoryToBookService.findAll();
  }

  @Get(':bookId/:categoryId')
  findOne(
    @Param('bookId') bookId?: number,
    @Param('categoryId') categoryId?: number,
  ) {
    return this.categoryToBookService.findOne(+bookId, +categoryId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryToBookDto: UpdateCategoryToBookDto,
  ) {
    return this.categoryToBookService.update(+id, updateCategoryToBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryToBookService.remove(+id);
  }
}
