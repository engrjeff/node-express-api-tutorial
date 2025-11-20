export const errorHandler = (err, req, res, next) => {
  res
    .status(500)
    .send({ error: err instanceof Error ? err.message : 'Server Error' });
};

export const notFoundHandler = (req, res, next) => {
  res.status(404).send('Not Found');
};
