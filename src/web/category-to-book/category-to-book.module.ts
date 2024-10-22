import { Module } from '@nestjs/common';
import { CategoryToBookService } from './category-to-book.service';
import { CategoryToBookController } from './category-to-book.controller';

@Module({
  controllers: [CategoryToBookController],
  providers: [CategoryToBookService],
})
export class CategoryToBookModule {}
