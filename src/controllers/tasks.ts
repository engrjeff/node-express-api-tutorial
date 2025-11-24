import type { NextFunction, Request, Response } from 'express';
import { TaskModel } from '../models/task.js';

const getTasks = (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const getTaskById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) return res.status(400).json({ error: 'Task ID is required' });

    const task = TaskModel.findOne(id);

    if (!task) return res.status(404).json({ error: 'Task Not Found' });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;

    if (!body.title) {
      return res.status(400).json({ error: 'Title is required.' });
    }

    const task = TaskModel.create({ title: body.title });

    res.status(201).json({ data: task });
  } catch (error) {
    next(error);
  }
};

const updateTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    if (!id) return res.status(400).json({ error: 'Task ID is required' });

    const updatedTask = TaskModel.update(id, updates);

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task Not Found' });
    }

    res.json({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};

const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) return res.status(400).json({ error: 'Task ID is required' });

    const wasDeleted = TaskModel.remove(id);

    if (!wasDeleted) {
      return res.status(404).json({ error: 'Task Not Found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const tasksController = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
