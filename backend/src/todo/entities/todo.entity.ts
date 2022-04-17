import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TodoStatus {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatus,
    default: TodoStatus.TODO,
  })
  status: TodoStatus;
}
