import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TodoListService } from './todo.service';
import { EmailParamDto } from './dto/create-todo.dto';
import { CreateTodoBody } from './dto/create-todo-body.dto';

@Controller('todo')
export class TodoListController {
  constructor(private readonly todoService: TodoListService) {}
  @Post('create')
  createTodo(
    @Query() emailParamDto: EmailParamDto,
    @Body() createTodoBodyDto: CreateTodoBody,
  ) {
    return this.todoService.createTodo(
      emailParamDto.email,
      createTodoBodyDto.todo,
    );
  }

  @Get('getAllTodosOfUser')
  getTodoListOfUser(@Query() emailParamDto: EmailParamDto) {
    return this.todoService.getTodoListOfUser(emailParamDto.email);
  }
}
