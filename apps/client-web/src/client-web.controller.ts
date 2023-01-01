import { Controller, Get } from '@nestjs/common';
import { ClientWebService } from './client-web.service';

@Controller()
export class ClientWebController {
  constructor(private readonly clientWebService: ClientWebService) {}

  @Get()
  getHello(): string {
    return this.clientWebService.getHello();
  }
}
