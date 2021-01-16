/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { FC } from 'react';

const DeleteButtonStyle: Interpolation<Theme> = { 
  display: 'inline-block',
  padding: '.5rem .7rem',
  backgroundColor: '#FF5353',
  color: 'white',
  border: '1px solid #FF5353',
  outline: 'none',
  transition: '.25s',
  '&:hover': {
    backgroundColor: 'white',
    color: '#FF5353'
  }
};

type Props = {
  isEdit: boolean;
  forHandleClick: () => void;
};

const DeleteButton: FC<Props> = (props) => {
  const { isEdit ,forHandleClick } = props;
  return (
    <button type='submit' css={DeleteButtonStyle} onClick={forHandleClick} disabled={isEdit}>X</button>
  );
};

export default DeleteButton;