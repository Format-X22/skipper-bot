import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { QueryTrimmerPipe } from './utils/query-trimmer.pipe';
import { json, urlencoded } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PRODUCTION_VERSION } from './api.const';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(compression());
    app.enableVersioning({
        type: VersioningType.URI,
    });
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        }),
        new QueryTrimmerPipe(),
    );
    app.setGlobalPrefix('api');

    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Skipper bot server')
        .setDescription('Open source trade bot platform')
        .setVersion(APP_PRODUCTION_VERSION)
        .build();
    // TODO Swagger auth
    const document = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api-docs', app, document);

    // TODO Auto find available port
    await app.listen(3000);
}
bootstrap().catch((error) => console.log('FATAL ON START', error));
