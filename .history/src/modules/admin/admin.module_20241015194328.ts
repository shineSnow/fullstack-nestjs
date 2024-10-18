import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [AdminController],
})
export class AdminModule {}
