import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export function LoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Request...', req.url);
  next();
  console.log('Response...');
}
