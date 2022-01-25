import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TestController} from "./controller/test.controller";
import {TestService} from "./service/test.service";

@Module({
  imports: [],
  controllers: [AppController,TestController],
  providers: [AppService, TestService],
})
export class AppModule {}