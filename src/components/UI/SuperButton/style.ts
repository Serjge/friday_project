import styled, { CSSProp } from 'styled-components';

type ButtonPropsType = {
  size?: 'small' | 'normal';
  marginTop?: CSSProp;
};

export const Button = styled.button<ButtonPropsType>`
  margin: ${({ size, marginTop }) =>
    size === 'small'
      ? `${marginTop || '0'} 0 5px `
      : `${marginTop || '15px'} 15px 15px `};
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
  padding: ${({ size }) => (size === 'small' ? '5px' : '15px 30px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '18px')};
  border-radius: 2px;
  position: relative;
  display: inline-block;

  text-align: center;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${({ theme: { mainColor } }) => mainColor};
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid ${({ theme: { mainColor } }) => mainColor};
  box-shadow: inset 0 0 0 0 ${({ theme: { mainColor } }) => mainColor};

  &:hover {
    color: ${({ theme: { fontColor } }) => fontColor};
    box-shadow: inset 0 -100px 0 0 ${({ theme: { mainColor } }) => mainColor};
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme: { borderColor } }) => borderColor};
  }
`;
