import { Injectable } from '@nestjs/common';
import { CreatePostToTagDto } from './dto/create-post-to-tag.dto';
import { UpdatePostToTagDto } from './dto/update-post-to-tag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostToTagService {
  constructor(private prisma: PrismaService) {}
  async create(createPostToTagDto: CreatePostToTagDto) {
    const postToTag = await this.prisma.postToTag.create({
      data: createPostToTagDto,
    });
    return postToTag;
  }

  async findAll() {
    const postToTag = await this.prisma.postToTag.findMany();
    return postToTag;
  }

  async findPostByTag(tagId: number) {
    const postToTag = await this.prisma.postToTag.findMany({
      where: { tagId: tagId },
    });
    return postToTag;
  }

  update(id: number, updatePostToTagDto: UpdatePostToTagDto) {
    return `This action updates a #${id} postToTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} postToTag`;
  }
}
