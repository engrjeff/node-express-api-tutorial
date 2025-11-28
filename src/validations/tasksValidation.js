export const validateCreateTask = (req, res, next) => {
  const { title } = req.body; // Destructuring object
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Title is required and must not be empty." });
  }
  next();
};

// Added this new function to help the PUT method manipulate the task property "isCompleted".
export const validateUpdateTask = (req, res, next) => {
  const { title, isCompleted } = req.body; // Object destructuring including the "isCompleted"
  // REJECT Empty titles
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Title is required and must not be empty." });
  }

  // REJECT improper values for "isCompleted"
  if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
    return res
      .status(400)
      .json({ error: "Declare if a task is completed or not." });
  }
  next();
};
