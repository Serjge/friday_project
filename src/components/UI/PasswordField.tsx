import React, { ReactElement } from 'react';

import { EyeIcon } from '../../icon/eyeIcon';

import { TextField } from './TextField';

export const PasswordField = (): ReactElement => {
  // const showPassword = (): void => {
  //   const input = document.getElementById('passwordInput');
  //   const type = input!.getAttribute('type');
  //   if (type === 'password') {
  //     input!.setAttribute('type', 'text');
  //   } else {
  //     input!.setAttribute('type', 'password');
  //   }
  // };
  console.log('password');
  return (
    <div>
      <TextField />
      <EyeIcon />
      {/* <input id="inputPassword" placeholder="write-password" type="password" /> */}
      {/* <input type="checkbox" onClick={showPassword} /> */}
    </div>
  );
};
