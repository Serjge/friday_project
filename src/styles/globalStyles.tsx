import { createGlobalStyle } from 'styled-components';

import { ThemeType } from 'styles/theme';

export type GlobalThemeProps = {
  theme: ThemeType;
};

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme: { backgroundColor } }: GlobalThemeProps) =>
      backgroundColor};
    color: ${({ theme: { fontColor } }: GlobalThemeProps) => fontColor};
  }
  h1 {
    margin-bottom: 40px;
  }
`;
