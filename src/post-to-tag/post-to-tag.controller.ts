import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostToTagService } from './post-to-tag.service';
import { CreatePostToTagDto } from './dto/create-post-to-tag.dto';
import { UpdatePostToTagDto } from './dto/update-post-to-tag.dto';

@Controller('post-to-tag')
export class PostToTagController {
  constructor(private readonly postToTagService: PostToTagService) {}

  @Post()
  create(@Body() createPostToTagDto: CreatePostToTagDto) {
    return this.postToTagService.create(createPostToTagDto);
  }

  @Get()
  findAll() {
    return this.postToTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postToTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostToTagDto: UpdatePostToTagDto) {
    return this.postToTagService.update(+id, updatePostToTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postToTagService.remove(+id);
  }
}
