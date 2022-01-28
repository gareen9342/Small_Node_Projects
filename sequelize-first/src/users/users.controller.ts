import {UsersService} from "./users.service";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserDTo} from "./dto/UserDto";
import {User} from "./models/user.model";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  getUsers(): string{
    return "hello"
  }

  @Post()
  create(@Body() userDto: UserDTo): Promise<User> {
    return this.usersService.create(userDto);
  }
}