import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoList, TodoListDocument } from './schema/todo.schema';

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name) private todoListModel: Model<TodoListDocument>,
  ) {}

  async createTodo(email: string, todo: string) {
    if (!email) {
      return { success: false, message: 'Email is Required' };
    }
    const createTodo = new this.todoListModel({ email, todo });
    const data = createTodo.save();
    return { success: true, message: 'Todo Added Successfully', data };
  }

  async getTodoListOfUser(email: string) {
    if (!email) {
      return { success: false, message: 'Email is Required' };
    }
    const userTodos = await this.todoListModel.find({ email: email });

    return { success: true, message: 'Fetched Successfully', data: userTodos };
  }
}
