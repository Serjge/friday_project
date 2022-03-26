import React, { FC, forwardRef, ReactElement, useState } from 'react';

import { TextField, TextFieldPropsType } from '../TextField/TextField';

import { EyeDivButton, PasswordPosition } from './style';

import { EyeIcon } from 'icon';

type PasswordFieldPropsType = TextFieldPropsType;

export const POSITIVE = 1;
export const NEGATIVE = 0;

export const PasswordField: FC<PasswordFieldPropsType> = forwardRef(
  ({ ...props }: PasswordFieldPropsType, ref): ReactElement => {
    const [eye, setEye] = useState(true);

    let type;
    let visibility;

    if (eye) {
      type = 'password';
      visibility = POSITIVE;
    } else {
      type = 'text';
      visibility = NEGATIVE;
    }

    const isPasswordInvisibilityHandle = (): void => setEye(!eye);

    return (
      <PasswordPosition>
        <TextField {...props} type={type} ref={ref} />
        <EyeDivButton
          visibility={visibility}
          onClick={isPasswordInvisibilityHandle}
          role="presentation"
        >
          <EyeIcon />
        </EyeDivButton>
      </PasswordPosition>
    );
  },
);
