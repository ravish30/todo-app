import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoList, TodoListSchema } from './schema/todo.schema';
import { TodoListController } from './todo.controller';
import { TodoListService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
    ]),
  ],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoModule {}
