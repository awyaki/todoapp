/** @jsxImportSource @emotion/react */
import { ChangeEvent, FormEvent } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import AddButton from 'components/AddButton';

const InputTodoStyle: Interpolation<Theme> = { 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '10%',
  padding: '.7rem',
  ".input-area": {
    width: '100%',
    marginRight: '1rem',
    border: '1px solid #DDD',
  }
};

type Props = {
  css?: Interpolation<Theme>;
  isEdit: boolean;
  forInputTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  forInputTodoSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
};

const InputTodo = (props: Props) => {

  const { isEdit, forInputTodoChange, forInputTodoSubmit, inputValue, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    forInputTodoChange(e);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    forInputTodoSubmit(e);
  }; 

  return (
    <form css={InputTodoStyle} {...rest} onSubmit={(e) => handleSubmit(e)}>
      <input className="input-area" type="text" value={inputValue} name="todotitle" onChange={handleChange} disabled={isEdit}/>
      <AddButton />
    </form>
  );
};

export default InputTodo;