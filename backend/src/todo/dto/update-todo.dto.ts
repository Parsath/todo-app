import { PartialType } from '@nestjs/mapped-types';
import { TodoStatus } from '../entities/todo.entity';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  title: string;
  description: string;
  status: TodoStatus;
}
