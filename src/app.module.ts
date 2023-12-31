import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UsersModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
