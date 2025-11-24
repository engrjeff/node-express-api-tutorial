import { tasks } from '../data/tasks.js';
import type { CreateTaskDto, Task, UpdateTaskDto } from '../types/task.js';

const findMany = () => {
  return tasks;
};

const findOne = (id: string) => {
  const foundTask = tasks.find((task) => task.id === id);
  return foundTask;
};

const create = (data: CreateTaskDto) => {
  const id = crypto.randomUUID();
  const task = {
    id,
    title: data.title,
    isCompleted: false,
  };

  tasks.unshift(task);

  return task;
};

const update = (id: string, updates: UpdateTaskDto) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  const updatedTask = { ...tasks[taskIndex], ...updates } as Task;
  tasks[taskIndex] = updatedTask;

  return updatedTask;
};

const remove = (id: string) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return false;
  }

  tasks.splice(taskIndex, 1);
  return true;
};

export const TaskModel = {
  findMany,
  findOne,
  create,
  update,
  remove,
};
