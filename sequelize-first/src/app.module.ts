import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module"
import {AppLogginService} from "./logger/LoggerService";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: new AppLogginService()
})
export class AppModule {}
