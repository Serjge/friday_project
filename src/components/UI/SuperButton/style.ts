import styled, { css, CSSProp } from 'styled-components';

type ButtonPropsType = {
  size?: 'small' | 'normal' | 'big';
  marginTop?: CSSProp;
};

export const BaseButton = styled.button`
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
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

export const Button = styled(BaseButton)<ButtonPropsType>`
  ${({ size, marginTop }) => {
    switch (size) {
      case 'small':
        return css`
          margin: ${marginTop || '0'} 5px 5px;
          padding: 5px 10px;
          font-size: 12px;
        `;
      case 'big':
        return css`
          margin: ${marginTop || '15px'} 15px 15px;
          padding: 15px 30px;
          font-size: 18px;
        `;

      default:
        return css`
          margin: ${marginTop || '10px'} 10px 10px;
          padding: 10px 20px;
          font-size: 15px;
        `;
    }
  }}
`;
