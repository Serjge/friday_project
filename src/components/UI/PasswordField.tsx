import React, { FC, forwardRef, ReactElement, useRef, useState } from 'react';

import { EyeIcon } from '../../icon/eyeIcon';
import { Flex } from '../../styles';

import { TextField } from './TextField';
import { TextFieldPropsType } from './TextField/TextField';

type PasswordFieldPropsType = TextFieldPropsType;
export const PasswordField: FC<PasswordFieldPropsType> = forwardRef(
  ({ ...props }: PasswordFieldPropsType, ref): ReactElement => {
    // const showPassword = (unicId: string): void => {
    //   const input = document.getElementById(unicId);
    //   const type = input!.getAttribute('type');
    //
    //   if (type === 'password') {
    //     input!.setAttribute('type', 'text');
    //   } else {
    //     input!.setAttribute('type', 'password');
    //   }
    //   console.log(type);
    // };

    const answer = useRef<HTMLInputElement>(null);

    const [qwe, setQwe] = useState(false);

    if (answer.current! !== null) {
      if (qwe) {
        answer.current!.type = 'password';
      } else {
        answer.current!.type = 'text';
      }
    }
    return (
      <Flex flexDirection="row" alignItems="center">
        <TextField {...props} ref={ref} />
        <div onClick={() => setQwe(!qwe)} role="presentation">
          <EyeIcon />
        </div>
      </Flex>
    );
  },
);
