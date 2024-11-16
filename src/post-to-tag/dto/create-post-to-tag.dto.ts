import { ApiProperty } from '@nestjs/swagger';

export class CreatePostToTagDto {
  @ApiProperty({ description: 'Post ID' })
  postId: number;
  @ApiProperty({ description: 'Tag ID' })
  tagId: number;
}
