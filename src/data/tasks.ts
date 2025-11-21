import type { Task } from '../types/task';

export const tasks: Task[] = Array.from(Array(10).keys()).map((n) => ({
  id: (n + 1).toString(),
  title: `Task ${n + 1}`,
  isCompleted: n % 2 === 0 ? true : false,
}));
