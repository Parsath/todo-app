import { EntityRepository, Repository } from 'typeorm';
import { Todo, TodoStatus } from './entities/todo.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  countStats() {
    const todo = this.count({ where: { status: 'todo' } });
    const doing = this.count({ where: { status: 'doing' } });
    const done = this.count({ where: { status: 'done' } });
    return { todo: todo, doing: doing, done: done };
  }
}
