import { NestFactory } from '@nestjs/core';
import { ClientWebModule } from './client-web.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientWebModule);
  await app.listen(3000);
}
bootstrap();
