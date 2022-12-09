import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('hello')
  getHello() {
    return {
      message: 'Hello There! 🤝',
    };
  }
}
