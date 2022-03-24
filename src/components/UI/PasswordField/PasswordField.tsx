import React, { FC, forwardRef, ReactElement, useState } from 'react';

import styled from 'styled-components';

import { EyeIcon } from '../../../icon/eyeIcon';
import { TextField } from '../TextField';
import { TextFieldPropsType } from '../TextField/TextField';

const PasswordWrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  position: relative;
  // justify-content: center;
  //align-items: center;
`;

const EyeDivButton = styled.div`
  position: absolute;
  bottom: 27px;
  right: 20px;
  //top: 5px;
  //margin-left: 260px;
  &::after {
    position: absolute;
    content: '';
    bottom: 15px;
    //top: 13px;
    right: 0;
    width: 30px;
    height: 3px;
    background: black;
    transform: rotate(45deg);
  }
`;

type PasswordFieldPropsType = TextFieldPropsType;
export const PasswordField: FC<PasswordFieldPropsType> = forwardRef(
  ({ ...props }: PasswordFieldPropsType, ref): ReactElement => {
    const [eye, setEye] = useState(true);
    let type;

    if (eye) {
      type = 'password';
    } else {
      type = 'text';
    }

    return (
      <PasswordWrapper>
        <TextField {...props} type={type} ref={ref} />
        <EyeDivButton onClick={() => setEye(!eye)} role="presentation">
          <EyeIcon />
        </EyeDivButton>
      </PasswordWrapper>
    );
  },
);
