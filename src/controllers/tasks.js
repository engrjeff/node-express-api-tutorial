import { TaskModel } from '../models/task.js';

const getTasks = (req, res) => {
  //   const query = req.query;

  //   if (query.completed) {
  //     const isCompleted = query.completed === 'true' ? true : false; // ternary

  //     const completedTasks = tasks.filter(
  //       (task) => task.isCompleted === isCompleted
  //     );

  //     return res.json({ data: completedTasks });
  //   }
  const tasks = TaskModel.findMany();

  res.json({ data: tasks });
};

const getTaskById = (req, res) => {
  const id = req.params.id;

  const task = TaskModel.findOne(id);

  if (!task) return res.status(404).json({ error: 'Task Not Found' });

  res.json(task);
};

const createTask = (req, res) => {
  const body = req.body;

  if (!body.title) {
    return res.status(400).json({ error: 'Title is required.' });
  }

  const task = TaskModel.create(body.title);

  res.status(201).json({ data: task });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  const updatedTask = TaskModel.update(id, updates);

  if (!updatedTask) {
    return res.status(404).json({ error: 'Task Not Found' });
  }

  res.json({ data: updatedTask });
};

const deleteTask = (req, res) => {
  const id = req.params.id;

  const wasDeleted = TaskModel.remove(id);

  if (!wasDeleted) {
    return res.status(404).json({ error: 'Task Not Found' });
  }

  res.status(204).send();
};

export const tasksController = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
