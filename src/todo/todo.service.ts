import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoList, TodoListDocument } from './schema/todo.schema';

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name) private todoListModel: Model<TodoListDocument>,
  ) {}

  async createTodo(userId: string, todo: string) {
    if (!userId) {
      return { success: false, message: 'userId is Required' };
    }
    const createTodo = new this.todoListModel({ userId: userId, todo });
    const data = createTodo.save();
    return { success: true, message: 'Todo Added Successfully', data };
  }

  async getTodoListOfUser(userId: string) {
    if (!userId) {
      return { success: false, message: 'userId is Required' };
    }
    const userTodos = await this.todoListModel.find({ userId: userId });

    return { success: true, message: 'Fetched Successfully', data: userTodos };
  }
}
