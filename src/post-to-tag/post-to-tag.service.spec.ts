import { Test, TestingModule } from '@nestjs/testing';
import { PostToTagService } from './post-to-tag.service';

describe('PostToTagService', () => {
  let service: PostToTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostToTagService],
    }).compile();

    service = module.get<PostToTagService>(PostToTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
