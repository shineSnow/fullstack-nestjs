import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { CategoryModule } from './category/category.module';
import { UsersController } from './users/users.controller';
import { BooksController } from './books/books.controller';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [UsersModule, BooksModule, CategoryModule],
  controllers: [UsersController, BooksController, CategoryController],
  providers: [],
})
export class PortalModule {}
