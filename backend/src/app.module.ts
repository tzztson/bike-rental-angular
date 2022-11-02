import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';
import 'dotenv/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_PORT: Joi.number()
          .required()
          .error(
            new Error(
              `Please make sure the attribute "DB_PORT" is set in the .env file and contains a value. Check the example.env for additional attributes you might need`,
            ),
          ),
        DB_HOST: Joi.string()
          .required()
          .error(
            new Error(
              `Please make sure the attribute "DB_HOST" is set in the .env file and contains a value. Check the example.env for additional attributes you might need`,
            ),
          ),
        DB_USER: Joi.string()
          .required()
          .error(
            new Error(
              `Please make sure the attribute "DB_USER" is set in the .env file and contains a value. Check the example.env for additional attributes you might need`,
            ),
          ),
        DB_PASSWORD: Joi.string()
          .required()
          .error(
            new Error(
              `Please make sure the attribute "DB_PASSWORD" is set in the .env file and contains a value. Check the example.env for additional attributes you might needD`,
            ),
          ),
        DB_NAME: Joi.string()
          .required()
          .error(
            new Error(
              `Please make sure the attribute "DB_NAME" is set in the .env file and contains a value. Check the example.env for additional attributes you might need`,
            ),
          ),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
