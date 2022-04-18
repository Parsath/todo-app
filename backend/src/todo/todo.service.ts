import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoStatus } from './entities/todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private readonly repository: TodoRepository,
  ) {}

  public async create(createTodoDto: CreateTodoDto) {
    return await this.repository.save(createTodoDto);
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  public async countStats() {
    return await this.repository.countStats();
  }

  public async countDone() {
    return await this.repository.count({ status: TodoStatus.DONE });
  }

  public async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.repository.update(id, updateTodoDto);
  }

  public async updateStatus(id: number, updateStatusDto: UpdateStatusDto) {
    return await this.repository.update(id, updateStatusDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
