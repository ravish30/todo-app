import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoList, TodoListSchema } from './schema/todo.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: TodoList.name, schema: TodoListSchema }])],
    controllers: [],
    providers: []
})
export class TodoModule {}
