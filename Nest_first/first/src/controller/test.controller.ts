import {Controller, Get, Redirect} from "@nestjs/common";
import {TestService} from "../service/test.service";

// @ts-ignore
@Controller("/test")
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get("/")
  hi(): string{
    return "asdf"
  }
  @Get("/docs")
  @Redirect("https://naver.com", 302)
  doTest(): string{
    return this.testService.doTest();
  }
}
