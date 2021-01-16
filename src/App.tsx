/** @jsxImportSource @emotion/react */
import { Global, Interpolation, Theme  } from '@emotion/react';
import Header from 'components/Header';
import TodoList from 'components/TodoList';
import InputTodo from 'components/InputTodo';
import EditBox from 'components/EditBox';
import { TodoModel } from 'models/TodoModel';
import { useState, FormEvent, ChangeEvent } from 'react';
import autoIncrement from 'util/autoincrement';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import updatedTodoTitle from 'util/updatedTodos';
import toggleChecked from 'util/toggleChecked';

const GlobalStyle: Interpolation<Theme> = {
  '*': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0'
  },
};

const appStyle: Interpolation<Theme> = {
  width: '400px', 
  height: '100vh',
  margin: '0 auto',
};

const headerLayout: Interpolation<Theme> = {
  marginTop: '1rem',
  marginBottom: '.7rem',
};

const editBoxLayout: Interpolation<Theme> = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};


const App = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [inputVal, setInputVal] = useState<string>(''); 
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editVal, setEditval] = useState<string>('');
  const [editId, setEditId] = useState<number|null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
  };


  const handleAdd = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputVal !== '') {
      setTodos((prev) => prev.concat([{ id: autoIncrement(prev), title: inputVal, checked: false}]));
      setInputVal('');
    }
  };


  //Edit画面を開いているときdeleteボタンをdisableにする
  const handleDelete = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };



  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditval(e.target.value);
  };


  // TODO
  const handleEditOkSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (editId !== null) {
      setTodos((prevTodos) => updatedTodoTitle(prevTodos, editId, editVal));
      setIsEdit(false);
    }
  };

  const handleEditCancelSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsEdit(false);
  };


  const handleChecked = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    setTodos((prevTodos) => toggleChecked(prevTodos, id));
  };

  const renderEdit = (id: number): EmotionJSX.Element => {
    const defaultTitle = todos.filter((todo) => todo.id === id)[0].title;
    return (
        <EditBox css={editBoxLayout} 
                  handleChange={handleEditInputChange} 
                  handleOkSubmit={handleEditOkSubmit} 
                  handleCancelSubmit={handleEditCancelSubmit} 
                  defaultTitle={defaultTitle}/>
    );
  };

  const handleEditOpen = (id: number): void => {
    setIsEdit(true);
    setEditId(id);
  };


  return (
    <div>
      <Global styles={GlobalStyle} />
      <div css={appStyle}>
        <Header css={headerLayout} />
        {isEdit && editId && renderEdit(editId)} 
        <TodoList 
          todos={todos} 
          isEdit={isEdit}
          handleDelete={handleDelete} 
          handleEditOpen={handleEditOpen} 
          handleChecked={handleChecked}/>
        <InputTodo 
          isEdit={isEdit}
          forInputTodoChange={handleInputChange} 
          forInputTodoSubmit={handleAdd} 
          inputValue={inputVal} />
      </div>
    </div>
  );
};

export default App;
