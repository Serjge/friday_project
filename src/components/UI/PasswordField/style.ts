import styled from 'styled-components';

export const PasswordPosition = styled.div`
  position: relative;
`;

export const EyeDivButton = styled.div`
  position: absolute;
  bottom: 27px;
  right: 20px;
  &::after {
    position: absolute;
    content: '';
    bottom: 18px;
    right: 0;
    width: 30px;
    height: 3px;
    background: black;
    transform: rotate(45deg);
  }
`;
