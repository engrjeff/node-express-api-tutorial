import { tasks } from '../data/tasks.js';

const findMany = () => {
  return tasks;
};

const findOne = (id) => {
  const foundTask = tasks.find((task) => task.id === id);
  return foundTask;
};

const create = (title) => {
  const id = crypto.randomUUID();
  const task = {
    id,
    title,
    isCompleted: false,
  };

  tasks.unshift(task);

  return task;
};

export const TaskModel = {
  findMany,
  findOne,
  create,
};
