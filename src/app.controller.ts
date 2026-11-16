import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/about')
  getAbout() {
    return {
      name: 'Coleção de Camisas',
      description: 'Catálogo pessoal de camisas e jaquetas de futebol',
    };
  }
}
