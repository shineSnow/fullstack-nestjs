import { Test, TestingModule } from '@nestjs/testing';
import { CategoryToBookService } from './category-to-book.service';

describe('CategoryToBookService', () => {
  let service: CategoryToBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryToBookService],
    }).compile();

    service = module.get<CategoryToBookService>(CategoryToBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
