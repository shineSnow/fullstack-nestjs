import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto as CreateCatDto1 } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { ZodValidationPipe } from 'src/pipe/ZodValidation.pipe';
import { CreateCatDto, createCatSchema } from './dto/create-cat-schema';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(
    @Query() query: any,
    @Body(new ZodValidationPipe(createCatSchema)) createCatDto: CreateCatDto,
  ): Promise<any> {
    this.catsService.create(createCatDto as Cat);
    return {
      data: `This action adds a new cat ${query.name}  ${query.age}`,
      body: createCatDto,
    };
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
