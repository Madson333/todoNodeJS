import express from 'express';
import { createTodo, deleteTodo, listTodos, updateTodo } from '../store/todos';

const router = express.Router();

router.get('/', (req, res, next) => {
  const todos = listTodos();
  res.json(todos);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: 'Title and description are required' });
  }
  const newTodo = createTodo(title, description);
  res.status(201).json(newTodo);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }
  if (typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Completed must be a boolean' });
  }
  const updatedTodo = updateTodo(id, completed);
  if (!updatedTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.status(200).json(updatedTodo);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedTodo = deleteTodo(id);
  if (!deletedTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.status(204).json(deletedTodo);
});

export default router;
