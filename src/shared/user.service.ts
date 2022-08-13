import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO, RegisterDTO } from 'src/auth/auth.dto';
import { User } from 'src/types/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  private sanitiUser(user: User) {
    return user.depopulate('password');
  }

  async create(userDto: RegisterDTO) {
    const { username } = userDto;
    const user = this.userModel.findOne({ username });
    if (user) {
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel(userDto);
    await createdUser.save();
    return this.sanitiUser(createdUser);
  }

  async findByLogin(userLogin: LoginDTO) {
    const { username, password } = userLogin;
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitiUser(user);
    } else {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: any) {
    const { username } = payload;
    return await this.userModel.findOne({ username });
  }
}
