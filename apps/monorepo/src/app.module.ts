import { SharedModule } from './../../../libs/shared/src/shared.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [SharedModule],
  controllers: [AppController],
})
export class AppModule {}
