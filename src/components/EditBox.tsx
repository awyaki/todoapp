/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { ChangeEvent, FC, FormEvent } from 'react';

const editBoxStyle: Interpolation<Theme> = {
  display: 'flex',
  alignItems: 'center',
  width: '350px',
  height: '5rem', 
  backgroundColor: '#FAFBFF',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, .3)',
  borderRadius: '.5rem',
};

const okButtonStyle: Interpolation<Theme> = { 
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

const cancelButtonStyle: Interpolation<Theme> = { 
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

const formStyle: Interpolation<Theme> = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '0 auto', 
};

const inputTextStyle: Interpolation<Theme> = {
  border: '1px solid #DDD',
  height: '1.7rem',
  marginRight: '1.2rem',
};

type Props = {
  css?: Interpolation<Theme>;
  defaultTitle: string; 
  handleChange:(e: ChangeEvent<HTMLInputElement>) => void;
  handleOkSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleCancelSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const EditBox: FC<Props> = (props) => {
  const {defaultTitle, handleChange, handleOkSubmit, handleCancelSubmit, ...rest} = props;
  return (
    <div css={editBoxStyle} {...rest}>
      <div css={formStyle}>
        <form onSubmit={handleOkSubmit}>
          <input type="text" css={inputTextStyle} size={23} onChange={(e) => handleChange(e)} defaultValue={defaultTitle}/>
            <input type="submit" css={okButtonStyle} value="OK" name="ok"/>
        </form>
        <form onSubmit={handleCancelSubmit}>
            <input type="submit" css={cancelButtonStyle} value="Cancel" name="cancel"/>
        </form>
      </div>
    </div>
  ); 
};

export default EditBox;