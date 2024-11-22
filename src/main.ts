import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // Configuración de las tuberías de validación

  // Configuración del directorio de vistas y motor de plantillas
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // Define la carpeta "views"
  app.setViewEngine('ejs'); // Configura EJS como el motor de vistas

  // Configuración para servir archivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public')); // Define la carpeta "public"

  await app.listen(3000);
}
bootstrap();