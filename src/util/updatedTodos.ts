import { TodoModel } from 'models/TodoModel';

const updatedTodoTitle = (
  todos: TodoModel[],
  id: number,
  title: string,
  ): TodoModel[] => {
  const idx = todos.findIndex((todo) => todo.id === id);
  const prevChecked = todos[idx].checked;
  const prevTitle = todos[idx].title;
  return todos.slice(0, idx).concat([{ id: id, title: title || prevTitle, checked: prevChecked }]).concat(todos.slice(idx+1));
};

export default updatedTodoTitle;