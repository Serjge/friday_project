import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  errorColor: string;
  mainColor: string;
  helpTextColor: string;
  }
}