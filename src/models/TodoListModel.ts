import { TodoModel } from 'models/TodoModel';
export type TodoListModel = {
  count: number;
  todos: TodoModel[]; 
};