import { TodoModel } from 'models/TodoModel';

const toggleChecked = (
  todos: TodoModel[],
  id: number,
  ): TodoModel[] => {
  const idx = todos.findIndex((todo) => todo.id === id);
  const checked = todos[idx].checked;
  const title = todos[idx].title;
  return todos.slice(0, idx).concat([{ id: id, title: title, checked: !checked }]).concat(todos.slice(idx+1));
};

export default toggleChecked;