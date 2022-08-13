import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '@/shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  login(@Body() userDto: LoginDTO) {
    const user: any = this.userService.findByLogin(userDto);
    const payload = {
      username: user.username,
      seller: user.seller,
    };
    //create token
    const token = this.authService.signPayload(payload);
    return {
      user,
      token,
    };
  }

  @Post('register')
  register(@Body() userDto: RegisterDTO) {
    const user: any = this.userService.create(userDto);
    const payload = {
      username: user.username,
      seller: user.seller,
    };
    //create token
    const token = this.authService.signPayload(payload);
    return {
      user,
      token,
    };
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  tmpAuth() {
    return {
      auth: 'works',
    };
  }
}
