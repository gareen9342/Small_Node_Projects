import {User} from "./models/user.model";
import {InjectModel} from "@nestjs/sequelize";
import {UserDTo} from "./dto/UserDto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UsersService{
  constructor(
      @InjectModel(User)
      private readonly userModel: typeof User,
  ) {}

  create(userDto: UserDTo): Promise<User>{
    // @ts-ignore
    return this.userModel.create(userDto);
  }
}