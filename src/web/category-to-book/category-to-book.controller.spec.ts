import { Test, TestingModule } from '@nestjs/testing';
import { CategoryToBookController } from './category-to-book.controller';
import { CategoryToBookService } from './category-to-book.service';

describe('CategoryToBookController', () => {
  let controller: CategoryToBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryToBookController],
      providers: [CategoryToBookService],
    }).compile();

    controller = module.get<CategoryToBookController>(CategoryToBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
