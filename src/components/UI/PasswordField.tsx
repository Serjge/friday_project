import React, { FC } from 'react';

import { Flex } from '../../styles';

import { SuperCheckbox } from './SuperCheckbox';
import { TextField } from './TextField';
import { TextFieldPropsType } from './TextField/TextField';

export const PasswordField: FC<TextFieldPropsType> = () => {
  const showPassword = (): void => {
    const input = document.getElementById('passwordInput');
    const type = input!.getAttribute('type');
    if (type === 'password') {
      input!.setAttribute('type', 'text');
    } else {
      input!.setAttribute('type', 'password');
    }
  };
  return (
    <Flex flexDirection="row" alignItems="center">
      <TextField />
      <SuperCheckbox onClick={showPassword} />
      <div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img src="./../../icon/img/eye.svg" alt="showPassword" onClick={showPassword} />
      </div>
      {/* <EyeIcon /> */}
    </Flex>
  );
};
