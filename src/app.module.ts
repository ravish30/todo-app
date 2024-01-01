import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forR, UsersModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
