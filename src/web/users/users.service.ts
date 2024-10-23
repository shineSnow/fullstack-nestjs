import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../db/schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DB_PROD') private drizzleClient: NodePgDatabase<typeof schema>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const res = await this.drizzleClient
      .insert(schema.users)
      .values(createUserDto)
      .returning({ id: schema.users.id })
      .then((res) => res[0] ?? null);
    return res;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
