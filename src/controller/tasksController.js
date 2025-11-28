import { taskModel } from "../model/taskModel.js";

const getAllTasks = (_, res) => {
  const tasks = taskModel.findAllTasks();
  res.status(200).json({ data: tasks });
};

const createTask = (req, res) => {
  const body = req.body;
  const task = taskModel.createTask(body.title);
  res.status(201).json({ data: task });
};

const getById = (req, res) => {
  const id = req.params.id;
  const task = taskModel.findOneTask(id);

  if (!task) return res.status(404).json({ error: "Task not found", task });

  res.status(200).json(task);
};

const updateById = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  // IF the task exist, modify the title
  // NEW GOAL, modify the "isCompleted" too
  const task = taskModel.updateTask(id, body.title, body.isCompleted);

  // TASK ID DOESNT EXIST > RETURN NULL (Task does not exists)
  if (!task) return res.status(404).json({ error: "Task not found" });

  res.status(200).json(task);
};

const deleteById = (req, res) => {
  const id = req.params.id;
  const task = taskModel.deleteTask(id);

  // TASK ID DOESNT EXIST > RETURN NULL (Task does not exists)
  if (!task) return res.status(404).json({ error: "Task not found" });

  res.status(200).json(task);
};

export const taskController = {
  getAllTasks,
  createTask,
  getById,
  updateById,
  deleteById,
};
