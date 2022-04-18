import { PartialType } from '@nestjs/mapped-types';
import { TodoStatus } from '../entities/todo.entity';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateStatusDto extends PartialType(CreateTodoDto) {
  status: TodoStatus;
}
