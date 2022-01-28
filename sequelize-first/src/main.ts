import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {AppLogginService} from "./logger/LoggerService";
import { join } from 'path';

async function bootstrap() {
  console.log(AppModule)
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // @ts-ignore
  app.useStaticAssets(join(__dirname, '..', "public"));
  // @ts-ignore
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}


bootstrap(); // 아직 이 부트스트랩이라는 말의 뜻을 모르겠음...


