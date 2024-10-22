import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryToBookService } from './category-to-book.service';
import { CreateCategoryToBookDto } from './dto/create-category-to-book.dto';
import { UpdateCategoryToBookDto } from './dto/update-category-to-book.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryToBookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryToBookDto: UpdateCategoryToBookDto) {
    return this.categoryToBookService.update(+id, updateCategoryToBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryToBookService.remove(+id);
  }
}
