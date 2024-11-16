import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}
  async create(createTagDto: CreateTagDto) {
    const tag = await this.prisma.tag.create({
      data: createTagDto,
    });
    return tag.id;
  }

  async findAll() {
    const res = await this.prisma.tag.findMany();
    return res;
  }

  async findOne(id: number) {
    const tag = await this.prisma.tag.findUnique({
      where: { id },
    });
    return tag;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const tag = await this.prisma.tag.update({
      where: { id },
      data: updateTagDto,
    });
    return tag.id;
  }

  async remove(id: number) {
    const tag = await this.prisma.tag.delete({
      where: { id },
    });
    return tag.id;
  }
}
