import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoListDocument = HydratedDocument<TodoList>;

@Schema({ timestamps: true, collection: 'todoList' })
export class TodoList {
  @Prop({ required: true })
  email: string;

  @Prop()
  todos: string[];
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
