import React, { FC, forwardRef, ReactElement, useState } from 'react';

import { TextField, TextFieldPropsType } from '../TextField/TextField';

import { PasswordPosition, EyeDivButton } from './style';

import { EyeIcon } from 'icon';

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

    const isPasswordInvisibilityHandle = (): void => setEye(!eye);

    return (
      <PasswordPosition>
        <TextField {...props} type={type} ref={ref} />
        <EyeDivButton onClick={isPasswordInvisibilityHandle} role="presentation">
          <EyeIcon />
        </EyeDivButton>
      </PasswordPosition>
    );
  },
);
