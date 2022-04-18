export enum TaskStatus {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

export default class Task {
  id: number;
  title: string;
  status: TaskStatus;
}
