import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoList, TodoListDocument } from './schema/todo.schema';
import { TodoLists } from './dto/todo.dto';

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name) private todoListModel: Model<TodoListDocument>,
  ) {}

  async createTodo(todo: TodoLists) {
    if (!todo.email || !todo) {
      return { success: false, message: 'All field are mandatory' };
    }
    const existingUser = await this.userModel.findOne({ email: user.email });
    if (!existingUser) {
      return { success: false, message: 'User Does Not Exist' };
    }

    if(existingUser.password != user.password) {
      return { success: false, message: 'Password Does not Match' };
    }

    return { success: true, message: 'Login Successful', data: existingUser };
  }

  async getTodoListOfUser(todo: TodoLists) {
    if (!user.name || !user.email || !user.password) {
      return { success: false, message: 'All field are mandatory' };
    }
    const existingUser = await this.userModel.findOne({ email: user.email });
    if (existingUser) {
      return { success: false, message: 'User Already Exists' };
    }

    const createUser = new this.userModel(user);
    const data = await createUser.save();
    return { success: true, message: 'Registered Successfully, Please Login', data: data };
  }
}
