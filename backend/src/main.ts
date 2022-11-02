import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
async function bootstrap() {
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;
  const host = process.env.HOST;
  const app = await NestFactory.create(AppModule);

  // initializeTransactionalContext();
  // patchTypeORMRepositoryWithBaseRepository();

  app.enableCors();

  app.setGlobalPrefix(globalPrefix);

  // dto validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // swagger
  // setupSwagger(app);

  await app.listen(port, host);
  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`,
  );
}

function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Overnights APIs ')
    .setDescription('API Specifications')
    .setVersion('version')
    .addBearerAuth(
      { type: 'http', in: 'header', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
}

bootstrap();
