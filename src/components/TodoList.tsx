/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import Todo from 'components/Todo';
import { TodoModel } from 'models/TodoModel';
import { ChangeEvent } from 'react';

const todoListStyle: Interpolation<Theme> = {
  backgroundColor: '#FAFBFF',
  height: '70%', 
  overflow: 'scroll',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, .3)',
};

const todoLayout: Interpolation<Theme> = {
  paddingBottom: '1rem',
};

type Props = {
  todos: TodoModel[];
  isEdit: boolean;
  handleDelete: (n: number) => void;
  handleEditOpen: (id: number) => void;
  handleChecked: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};


const TodoList = (props: Props) => {
  const { todos, isEdit, handleDelete, handleEditOpen, handleChecked } = props;
  return (
    <div css={todoListStyle}>
      {todos.map((todo) => <Todo key={todo.id} 
                                  id={todo.id}
                                  titie={todo.title}
                                  checked={todo.checked} 
                                  isEdit={isEdit}
                                  css={todoLayout} 
                                  handleDelete={() => handleDelete(todo.id)}
                                  handleEditOpen={() => handleEditOpen(todo.id)}
                                  handleChecked={((e, id) => handleChecked(e, id))}
                                  />)}
    </div>
  );
};

export default TodoList;