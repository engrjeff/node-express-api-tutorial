import type { ErrorRequestHandler, RequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res
    .status(500)
    .send({ error: err instanceof Error ? err.message : 'Server Error' });
};

export const notFoundHandler: RequestHandler = (req, res, next) => {
  res.status(404).send('Not Found');
};
