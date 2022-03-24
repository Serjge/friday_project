import styled from 'styled-components';

import { POSITIVE, NEGATIVE } from './PasswordField';

type EyePropsType = {
  // @ts-ignore
  visibility: POSITIVE | NEGATIVE;
};

export const PasswordPosition = styled.div`
  position: relative;
`;

export const EyeDivButton = styled.div<EyePropsType>`
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
    opacity: ${({ visibility }) => visibility};
  }
`;
