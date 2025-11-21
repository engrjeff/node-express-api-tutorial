import express from 'express';
import { tasksController } from '../controllers/tasks.js';
import {
  validateCreateTask,
  validateUpdateTask,
} from '../validations/tasks.js';
import { protectRoutes } from '../middlewares/protect.js';

const tasksRouter = express.Router();

tasksRouter.use(protectRoutes);

tasksRouter
  .route('/tasks')
  .get(tasksController.getTasks)
  .post(validateCreateTask, tasksController.createTask);

tasksRouter
  .route('/tasks/:id')
  .get(tasksController.getTaskById)
  .put(validateUpdateTask, tasksController.updateTask)
  .delete(tasksController.deleteTask);

export { tasksRouter };
