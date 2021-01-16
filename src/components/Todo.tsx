/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import DeleteButton from 'components/DeleteButton';
import CheckBox from 'components/CheckBox';
import EditButton from './EditButton';
import { ChangeEvent } from 'react';

const todoNonCheckedStyle: Interpolation<Theme> = { 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '.7rem',
  borderBottom: '1px solid #91c3ff',
  '.todo-title': {
    width: '80%',
  },
  'checkbox': {
    margin: '1.7rem'
  }
};

const todoCheckedStyle: Interpolation<Theme> = { 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '.7rem',
  borderBottom: '1px solid #91c3ff',
  backgroundColor: '#c2ffdf',
  '.todo-title': {
    width: '80%',
  },
  'checkbox': {
    margin: '1.7rem'
  }
};
const checkboxLayout: Interpolation<Theme> = {
  marginRight: '2rem'
};


type Props = {
  titie: string;
  id: number;
  checked: boolean;
  isEdit: boolean;
  css?: Interpolation<Theme>;
  handleDelete: () => void;
  handleEditOpen: () => void;
  handleChecked: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};


const Todo = (props: Props) => {
  const { id, titie, checked, isEdit, handleDelete, handleEditOpen, handleChecked, ...rest } = props;
  return (
    <div css={checked ? todoCheckedStyle : todoNonCheckedStyle} {...rest}>
      <CheckBox css={checkboxLayout} handleChecked={handleChecked} id={id} checked={checked} />
      <p className="todo-title">{titie}</p>
      <EditButton isEdit={isEdit} handleEditOpen={handleEditOpen}/>
      <DeleteButton isEdit={isEdit} forHandleClick={handleDelete}/>
    </div>
  );
};

export default Todo;