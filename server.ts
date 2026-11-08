import express from 'express';
import todosRouter from './routes/todos';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFoundHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(errorHandler);
app.use('/todos', todosRouter);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
