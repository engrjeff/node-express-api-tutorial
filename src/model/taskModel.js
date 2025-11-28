import { tasks } from "../data/tasksArr.js";

// FIND ALL TASKS
const findAllTasks = () => {
  return tasks;
};

// CREATE A TASKS
const createTask = (title) => {
  const id = crypto.randomUUID(); // random id gen

  // create the task using this blueprint
  const task = {
    id,
    title,
    isCompleted: false,
  };

  tasks.unshift(task); // add the task at the latest position in the task array
  return task; // return from the function
};

// FIND ONE TASK
const findOneTask = (id) => {
  // Will return the task with the required ID
  const foundTask = tasks.find((task) => task.id === id);
  return foundTask;
};

// UPDATE A TASK
const updateTask = (id, title, isCompleted) => {
  const foundTask = tasks.find((task) => task.id === id);

  if (!foundTask) return null;

  // ONLY UPDATE if the title is not undefined
  if (title !== undefined) {
    foundTask.title = title;
  }

  // ONLY UPDATE isCompleted if it has proper value (true or false)
  if (isCompleted !== undefined) {
    foundTask.isCompleted = isCompleted; // Update "isCompleted" if modified
  }

  return foundTask;
};

// DELETE A TASK
const deleteTask = (id) => {
  // Find the index of the task with the matching ID
  const foundTaskIndex = tasks.findIndex((task) => task.id === id);

  // IF TASK IS NOT FOUND RETURN IMMEDIATELY
  if (foundTaskIndex === -1) {
    return null;
  }

  // Remove the task from the array and pass it to the return
  const deletedTask = tasks.splice(foundTaskIndex, 1)[0];

  return deletedTask;
};

export const taskModel = {
  findAllTasks,
  findOneTask,
  createTask,
  updateTask,
  deleteTask,
};
