import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración global, por ejemplo, habilitar CORS
  app.enableCors();

  // Escuchar en el puerto 3000
  await app.listen(3000);
  console.log('🚀 Aplicación corriendo en http://localhost:3000');
}

bootstrap();
