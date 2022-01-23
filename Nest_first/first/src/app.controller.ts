import {Controller, Get, HttpCode, Param, Post, Query, Req} from '@nestjs/common';
import { AppService } from './app.service';
import Request from "express"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hihi")
  hihi(): string {
    return "hihi";
  }

  /**
   * https://docs.nestjs.com/controllers
   *
   * 기본적인 건 여기
   */
  @Get("/getrequest")
  findAll(@Req() request: Request, @Query("name") name: string): string{
    // console.log(request)
    // console.log(request.body)
    console.log(name)
    return `lets see requests`;
  }

  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }
}
