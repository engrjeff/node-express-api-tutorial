import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import { TaskModel } from './models/task.js';

const app = express();

const port = process.env.PORT || 5010;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from root');
});

app.get('/hello', (req, res) => {
  res.json({ greeting: 'Hi, jeff' });
});

// resources

// tasks

// GET ALL TASKS
app.get('/tasks', (req, res) => {
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
});

// GET task by id
app.get('/tasks/:id', (req, res) => {
  const id = req.params.id;

  const task = TaskModel.findOne(id);

  if (!task) return res.status(404).json({ error: 'Task Not Found' });

  res.json(task);
});

// POST create a new task
app.post('/tasks', (req, res) => {
  const body = req.body;

  if (!body.title) {
    return res.status(400).json({ error: 'Title is required.' });
  }

  const task = TaskModel.create(body.title);

  res.status(201).json({ data: task });
});

app.listen(port, function () {
  console.log(`Server running at port ${port}...`);
});
