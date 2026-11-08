import { Todo } from '../types/todos';
import { v4 as uuidv4 } from 'uuid';

const todo: Todo[] = [];

export function listTodos() {
  return [...todo];
}

export function findByid(id: string) {
  return todo.find((todo) => todo.id === id);
}

export function createTodo(title: string, description: string) {
  const newTodo: Todo = {
    id: uuidv4(),
    title,
    description,
    completed: false
  };
  todo.push(newTodo);
  return newTodo;
}

export function updateTodo(id: string, completed: boolean) {
  const index = todo.findIndex((todo) => todo.id === id);

  const newTodo = {
    ...todo[index],
    completed: completed
  };

  if (index !== -1) {
    todo[index] = { ...todo[index], ...newTodo };
    return todo[index];
  }
  return false;
}

export function deleteTodo(id: string) {
  const index = todo.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    const deletedTodo = todo.splice(index, 1)[0];
    return deletedTodo;
  }
  return false;
}
