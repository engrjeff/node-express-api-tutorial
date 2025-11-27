import express from 'express';
import { tasksController } from '../controllers/tasks.js';
import { validateCreateTask } from '../validations/tasks.js';
import { protect } from '../middlewares/protect.js';

// create a new Router
const tasksRouter = express.Router();

tasksRouter.use(protect);

tasksRouter
  .route('/tasks')
  .get(tasksController.getAll)
  .post(validateCreateTask, tasksController.create);

tasksRouter.get('/tasks/:id', tasksController.getById);

export { tasksRouter };
