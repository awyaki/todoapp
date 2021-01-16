/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { FC } from 'react';

const EditButtonStyle: Interpolation<Theme> = { 
  display: 'inline-block',
  padding: '.5rem .7rem',
  backgroundColor: '#54E019',
  color: 'white',
  border: '1px solid #54E019',
  outline: 'none',
  transition: '.25s',
  '&:hover': {
    backgroundColor: 'white',
    color: '#54E019'
  }
};

type Props = {
  isEdit: boolean;
  handleEditOpen: () => void;
};

const EditButton: FC<Props> = (props) => {
  const { isEdit, handleEditOpen } = props;
  return (
    <button type='submit' css={EditButtonStyle} onClick={handleEditOpen} disabled={isEdit}>Edit</button>
  );
};

export default EditButton;