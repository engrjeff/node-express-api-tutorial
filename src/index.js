import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import { tasksRouter } from './routes/tasks.js';
import { logger } from './middlewares/logger.js';

const app = express();

const port = process.env.PORT || 5010;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from root');
});

app.get('/hello', (req, res) => {
  res.json({ greeting: 'Hi, jeff' });
});

// resources

// api router
const apiRouter = express.Router();

// tasks
apiRouter.use(tasksRouter);

app.use(logger);
app.use('/api', apiRouter);

app.listen(port, function () {
  console.log(`Server running at port ${port}...`);
});
