import { TaskModel } from '../models/task.js';

const getAll = (req, res) => {
  const tasks = TaskModel.findMany();

  res.json({ data: tasks });
};

const create = (req, res) => {
  const body = req.body;

  const task = TaskModel.create(body.title);

  res.status(201).json({ data: task });
};

const getById = (req, res) => {
  const id = req.params.id;

  const task = TaskModel.findOne(id);

  if (!task) return res.status(404).json({ error: 'Task Not Found' });

  res.json(task);
};

export const tasksController = {
  getAll,
  create,
  getById,
};
