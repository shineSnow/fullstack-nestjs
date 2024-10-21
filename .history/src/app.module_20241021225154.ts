import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { ConfigModule } from '@nestjs/config';
import * as schema from './db/schema';
import { RouterModule } from '@nestjs/core';
import { BooksModule } from './web/books/books.module';
import { UsersModule } from './web/users/users.module';
import { Category } from './web/category/entities/category.entity';

@Module({
  imports: [
    BooksModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'web',
            children: [
              {
                path: 'books',
                module: BooksModule,
              },
              {
                path: 'users',
                module: UsersModule,
              },
              {
                path: 'category',
                module: Category,
              },
            ],
          },
        ],
      },
    ]),

    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env.local' }),
    DrizzlePGModule.register({
      tag: 'DB_PROD',
      pg: {
        connection: 'client',
        config: { connectionString: process.env.DATABASE_URL },
      },
      config: { schema: { ...schema } },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
