import {Injectable} from "@nestjs/common";

// @ts-ignore
@Injectable()
export class TestService{
  doTest(): string{
    return "this is test";
  }
}
