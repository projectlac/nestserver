import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API used for testing purpose')
    .setVersion('1.0.0')
    .setBasePath('api')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  app.useStaticAssets(join(__dirname, '..', 'upload'));
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
