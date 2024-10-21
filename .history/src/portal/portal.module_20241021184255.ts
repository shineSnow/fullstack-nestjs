import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { CategoryModule } from './category/category.module';
import { UsersController } from './users/users.controller';
import { BooksController } from './books/books.controller';
import { CategoryController } from './category/category.controller';
import { UsersService } from './users/users.service';
import { BooksService } from './books/books.service';
import { CategoryService } from './category/category.service';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [UsersModule, BooksModule, CategoryModule],

  controllers: [UsersController, BooksController, CategoryController],
  providers: [UsersService, BooksService, CategoryService],
})
export class PortalModule {}
