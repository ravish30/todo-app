import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TodoListDocument = HydratedDocument<TodoList>;

@Schema({ timestamps: true, collection: 'todoList' })
export class TodoList {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: TodoList.name })
  userId: string;

  @Prop()
  todo: string;
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
