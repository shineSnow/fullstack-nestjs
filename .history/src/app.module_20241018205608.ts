import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { ConfigModule } from '@nestjs/config';
import * as schema from './db/schema';
import { RouterModule } from '@nestjs/core';
import { PortalModule } from './modules/portal/portal.module';
import { AdminModule } from './modules/admin/admin.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TestModule,
    PortalModule,
    RouterModule.register([
      {
        path: 'portal',
        module: PortalModule,
      },
      {
        path: 'admin',
        module: AdminModule,
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
