import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  color: darkred;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  height: 30px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  height: 30px;
  margin-left: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
`;

type inputPropsType = {
  error?: string;
};

export const Input = styled.input<inputPropsType>`
  width: 300px;
  height: 30px;
  margin: 5px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  color: #66727d;
  background-color: #17212b;
  background-clip: padding-box;
  border: ${({ error }) => (error ? '2px solid darkred' : '2px solid #66727d')};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
