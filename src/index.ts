import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import { tasksRouter } from './routes/tasks';
import { errorHandler, notFoundHandler } from './utils/error-handler';

const app = express();

const port = process.env.PORT || 5010;

app.use(express.json());

app.get('/test', (req, res) => {
  res.send('The API is working correctly');
});

// resources
const apiRouter = express.Router();

// tasks
apiRouter.use(tasksRouter);

app.use('/api', apiRouter);

// error handler
app.use(errorHandler);

// 404 handler
app.use(notFoundHandler);

app.listen(port, function () {
  console.log(`Server running at port ${port}...`);
});
