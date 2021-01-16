import { TodoModel } from 'models/TodoModel';

const max = (a: number, b: number) => a > b ? a : b;
const autoIncrement = (todos: TodoModel[]): number => todos.length ? todos.map((todo) => todo.id).reduce(max) + 1 : 1;
export default autoIncrement;


