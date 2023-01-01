import { Module } from '@nestjs/common';
import { ClientWebController } from './client-web.controller';
import { ClientWebService } from './client-web.service';

@Module({
  imports: [],
  controllers: [ClientWebController],
  providers: [ClientWebService],
})
export class ClientWebModule {}
