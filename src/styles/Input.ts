import styled from 'styled-components';

export type inputPropsType = {
  error?: string;
};

export const Input = styled.input<inputPropsType>`
  border: none;
  width: ${({ width }) => width || '300px'};
  border-bottom: ${({ error }) => (error ? '1px solid darkred' : '1px solid #fefefe')};
  background: none;
  margin-top: 10px;
  padding: 10px 15px;
  outline: none;
  color: #fefefe;

  display: block;
  height: 35px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #282c34 inset !important;
    -webkit-text-fill-color: #fefefe !important;
  }
`;
