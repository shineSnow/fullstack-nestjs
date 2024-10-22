import { Injectable } from '@nestjs/common';
import { CreateCategoryToBookDto } from './dto/create-category-to-book.dto';
import { UpdateCategoryToBookDto } from './dto/update-category-to-book.dto';

@Injectable()
export class CategoryToBookService {
  create(createCategoryToBookDto: CreateCategoryToBookDto) {
    return 'This action adds a new categoryToBook';
  }

  findAll() {
    return `This action returns all categoryToBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryToBook`;
  }

  update(id: number, updateCategoryToBookDto: UpdateCategoryToBookDto) {
    return `This action updates a #${id} categoryToBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryToBook`;
  }
}
