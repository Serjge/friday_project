import styled from 'styled-components';

type ButtonPropsType = {
  size?: 'small' | 'normal';
};

export const Button = styled.button<ButtonPropsType>`
  margin: ${({ size }) => (size === 'small' ? '0px 5px' : '5px 10px')};
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: ${({ size }) => (size === 'small' ? '5px' : '8px 16px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};

  &:hover {
    background: #8daee5;
  }

  &:active {
    background: #1d49aa;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #cbd6ee;
  }
`;
