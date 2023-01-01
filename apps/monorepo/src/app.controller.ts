import { SharedService } from './../../../libs/shared/src/shared.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: SharedService) {}

  @Get()
  getHello(): string {
    return this.appService.shareFunction();
  }
}
