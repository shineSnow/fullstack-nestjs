import { PartialType } from '@nestjs/swagger';
import { CreatePostToTagDto } from './create-post-to-tag.dto';

export class UpdatePostToTagDto extends PartialType(CreatePostToTagDto) {}
