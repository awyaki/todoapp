/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { ChangeEvent } from 'react';



const checkBoxStyle: Interpolation<Theme> = {
};

type Props = {
  css?: Interpolation<Theme>
  id: number;
  checked: boolean;
  handleChecked: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};

const CheckBox = (porps: Props) => {
  const { id, checked, handleChecked, ...rest } = porps;
  return (
    <input css={checkBoxStyle} {...rest} type="checkbox" onChange={(e) => handleChecked(e, id)} checked={checked}/>
  );
};

export default CheckBox;