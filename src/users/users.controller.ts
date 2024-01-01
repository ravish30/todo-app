import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './dto/user.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  loginUser(@Body() user: User) {
    return this.userService.loginUser(user);
  }

  @Post('register')
  registerUser(@Body() user: User) {
    return this.userService.registerUser(user);
  }
}
