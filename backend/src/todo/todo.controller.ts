import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoStatus } from './entities/todo.entity';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Get('stats')
  stats() {
    return this.todoService.countStats();
  }

  @Get('stats/done')
  doneStats() {
    return this.todoService.countDone();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Patch('status/:id')
  updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return this.todoService.updateStatus(+id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
