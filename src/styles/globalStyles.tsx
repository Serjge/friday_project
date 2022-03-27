import { createGlobalStyle, DefaultTheme } from 'styled-components';

export type GlobalThemeProps = {
  theme: DefaultTheme;
};

export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }
  h1 {
    margin-bottom: 20px;
  }
`;
