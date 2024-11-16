import { Test, TestingModule } from '@nestjs/testing';
import { PostToTagController } from './post-to-tag.controller';
import { PostToTagService } from './post-to-tag.service';

describe('PostToTagController', () => {
  let controller: PostToTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostToTagController],
      providers: [PostToTagService],
    }).compile();

    controller = module.get<PostToTagController>(PostToTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
