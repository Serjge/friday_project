import React, { ReactElement } from 'react';

import { SuperButton } from '../SuperButton';

export const PasswordSuccessfulChanged = (): ReactElement => (
  <div>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI1pcPQ-tGJ2__PGLM1vcuqWGAtPoEMQuUA&usqp=CAU"
      alt="password-changed-successfully"
    />
    <h1>Password Updated!</h1>
    <div>
      <p>Your password has been changed successfully. Use your new password to log in.</p>
      <SuperButton>Login</SuperButton>
    </div>
  </div>
);
