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

const update = (id, updates) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  const updatedTask = { ...tasks[taskIndex], ...updates };
  tasks[taskIndex] = updatedTask;

  return updatedTask;
};

const remove = (id) => {
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
