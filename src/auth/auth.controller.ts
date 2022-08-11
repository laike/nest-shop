import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(@Body() userDto: LoginDTO) {
    return this.userService.findByLogin(userDto);
  }

  @Post('register')
  register(@Body() userDto: RegisterDTO) {
    return this.userService.create(userDto);
  }
}
