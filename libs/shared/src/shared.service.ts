import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  shareFunction(): string {
    return 'shared function';
  }
}
