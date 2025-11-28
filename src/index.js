// REFACTORED VERSION
import * as dotenv from "dotenv";
import express from "express";
import { taskRouter } from "./routes/tasksRouter.js";
import { logger } from "./middleware/taskLogger.js";

// Access .env
dotenv.config();
const port = process.env.PORT || 5010;

// Create our APP (Create a app.listen below)
const app = express();

// Allows us to access JSON files
app.use(express.json());

// API router
const apiRouter = express.Router();
apiRouter.use(taskRouter);

app.use(logger);
app.use("/api", apiRouter);

// FINALLY DON'T FORGET TO ADD app.listen
app.listen(port, () => {
  console.log("App started on PORT: " + port);
});
