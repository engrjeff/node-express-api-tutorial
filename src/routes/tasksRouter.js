import express from "express";
import { taskController } from "../controller/tasksController.js";
import {
  validateCreateTask,
  validateUpdateTask,
} from "../validations/tasksValidation.js";
import { protect } from "../middleware/tasksProtect.js";

// New Router
const taskRouter = express.Router();

// Use this before routing to controllers
taskRouter.use(protect);

taskRouter
  .route("/tasks")
  .get(taskController.getAllTasks)
  .post(validateCreateTask, taskController.createTask);

taskRouter
  // GET by ID
  .get("/tasks/:id", taskController.getById)
  // UPDATE
  .put("/tasks/:id", validateUpdateTask, taskController.updateById)
  // DELETE
  .delete("/tasks/:id", taskController.deleteById);

export { taskRouter };
