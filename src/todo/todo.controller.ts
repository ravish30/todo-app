import { Body, Controller, Post } from '@nestjs/common';
import { TodoLists } from './dto/todo.dto';
import { TodoListService } from './todo.service';

@Controller('todo')
export class TodoListController {
  constructor(private readonly todoService: TodoListService) {}
  @Post('create')
  createTodo(@Body() todo: TodoLists) {
    return this.todoService.createTodo(todo);
  }

  @Post('getAllTodosOfUser')
  getTodoListOfUser(@Body() todo: TodoLists) {
    return this.todoService.getTodoListOfUser(todo);
  }
}
