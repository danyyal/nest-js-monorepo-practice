import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientWebService {
  getHello(): string {
    return 'Hello World!';
  }
}
