import styled, { CSSProp } from 'styled-components';

type ButtonPropsType = {
  size?: 'small' | 'normal' | 'big';
  marginTop?: CSSProp;
};

export const Button = styled.button<ButtonPropsType>`
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
  margin: ${({ size, marginTop }) => {
    switch (size) {
      case 'small':
        return `${marginTop || '0'} 5px 5px `;
      case 'big':
        return `${marginTop || '15px'} 15px 15px `;
      default:
        return `${marginTop || '10px'} 10px 10px `;
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '5px 10px';
      case 'big':
        return '15px 30px';
      default:
        return '10px 20px';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'big':
        return '18px';
      default:
        return '15px';
    }
  }};
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
