import type { ErrorRequestHandler, RequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res) => {
  res
    .status(500)
    .send({ error: err instanceof Error ? err.message : 'Server Error' });
};

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).send('Not Found');
};
