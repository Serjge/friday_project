import React, { FC, forwardRef, ReactElement, useState } from 'react';

import { EyeIcon } from '../../../icon/eyeIcon';
import { Flex } from '../../../styles';
import { TextField } from '../TextField';
import { TextFieldPropsType } from '../TextField/TextField';

type PasswordFieldPropsType = TextFieldPropsType;
export const PasswordField: FC<PasswordFieldPropsType> = forwardRef(
  ({ ...props }: PasswordFieldPropsType, ref): ReactElement => {
    const [eye, setEye] = useState(false);
    let type;
    if (eye) {
      type = 'password';
    } else {
      type = 'text';
    }

    return (
      <Flex flexDirection="row" alignItems="center">
        <TextField {...props} type={type} ref={ref} />
        <div onClick={() => setEye(!eye)} role="presentation">
          <EyeIcon />
        </div>
      </Flex>
    );
  },
);
