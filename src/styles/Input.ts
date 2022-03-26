import styled from 'styled-components';

export type inputPropsType = {
  error?: string;
};

export const Input = styled.input<inputPropsType>`
  display: block;
  width: ${({ width }) => width || '300px'};
  height: 35px;
  border: none;
  border-bottom: ${({ error, theme: { errorColor, borderColor } }) => {
    if (error) {
      return `1px solid ${errorColor}`;
    }
    return `1px solid ${borderColor}`;
  }};
  background: none;
  margin-top: 10px;
  padding: 10px 15px;
  outline: none;
  color: ${({ theme: { fontColor } }) => fontColor};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme: { backgroundColor } }) => backgroundColor}
      inset !important;
    -webkit-text-fill-color: ${({ theme: { fontColor } }) => fontColor} !important;
  }
`;
