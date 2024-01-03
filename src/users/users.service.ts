import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, Users } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UserDocument>,
  ) {}

  async loginUser(user: User) {
    if (!user.email || !user.password) {
      return { success: false, message: 'All field are mandatory' };
    }
    const existingUser = await this.userModel.findOne({ email: user.email });
    if (!existingUser) {
      return { success: false, message: 'User Does Not Exist' };
    }

    if (existingUser.password != user.password) {
      return { success: false, message: 'Password Does not Match' };
    }

    return { success: true, message: 'Login Successful', data: existingUser };
  }

  async registerUser(user: User) {
    if (!user.name || !user.email || !user.password) {
      return { success: false, message: 'All field are mandatory' };
    }
    const existingUser = await this.userModel.findOne({ email: user.email });
    if (existingUser) {
      return { success: false, message: 'User Already Exists' };
    }

    const createUser = new this.userModel(user);
    const data = await createUser.save();
    return {
      success: true,
      message: 'Registered Successfully, Please Login',
      data: data,
    };
  }
}
