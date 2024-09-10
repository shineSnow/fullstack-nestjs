import { NestMiddleware } from '@nestjs/common';

export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    console.log('Request...', req.url);
    next();
    console.log('Response...', res.forRoutes);
  }
}
