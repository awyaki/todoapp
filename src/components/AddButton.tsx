/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';

const AddButtonStyle: Interpolation<Theme> = { 
  display: 'inline-block',
  padding: '0 .5rem',
  backgroundColor: '#5392FF',
  color: 'white',
  border: '1px solid #5392FF',
  outline: 'none',
  transition: '.25s',
  fontSize: '1.5rem',
  borderRadius: '.3rem',
  '&:hover': {
    backgroundColor: 'white',
    color: '#5392FF'
  }
};



const AddButton = () => {
  return (
    <input type="submit" css={AddButtonStyle} value="+" />
  );
};

export default AddButton;