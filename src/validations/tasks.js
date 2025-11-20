export const validateCreateTask = (req, res, next) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res
      .status(400)
      .json({ error: 'Title is required and must be a non-empty string.' });
  }

  next();
};

export const validateUpdateTask = (req, res, next) => {
  const { title, isCompleted } = req.body;

  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      return res
        .status(400)
        .json({ error: 'Title must be a non-empty string.' });
    }
  }

  if (isCompleted !== undefined) {
    if (typeof isCompleted !== 'boolean') {
      return res
        .status(400)
        .json({ error: 'isCompleted must be a boolean value.' });
    }
  }

  next();
};
