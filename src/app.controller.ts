import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome() {
    return { message: 'Bienvenido a la API de gestión académica 🚀' };
  }
}
