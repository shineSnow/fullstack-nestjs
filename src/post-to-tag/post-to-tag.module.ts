import { Module } from '@nestjs/common';
import { PostToTagService } from './post-to-tag.service';
import { PostToTagController } from './post-to-tag.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostToTagController],
  providers: [PostToTagService, PrismaService],
})
export class PostToTagModule {}
