import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return "Hello World!";
    return this.appService.getHello();
  }

  @Get(':id/:name/:age')
  getInit(@Param() params: Record<string, string>): string {
    console.log('params', params);
    const id = params.id;
    const name = params.name;
    const age = params.age;
    return `hello ${JSON.stringify(params)}`;
    // return this.appService.getHello(id);
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
