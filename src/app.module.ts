import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ravish:ravish@cluster0.ibfpwsz.mongodb.net/todoApp?retryWrites=true&w=majority'), UsersModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
