/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";

type Props = {
  css?: Interpolation<Theme>
};

const headerStyle: Interpolation<Theme> = {
  '.header': {
    fontWeight: 'lighter'
  }
}; 

const Header = (props: Props) => {
  return (
    <header css={headerStyle} {...props}>
      <h1 className="header">TODO</h1>
    </header>
  );
};

export default Header;