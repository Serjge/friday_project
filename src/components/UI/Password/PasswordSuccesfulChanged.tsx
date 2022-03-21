import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../enum';
import { changePasswordAC } from '../../../store/actions/passwordAction';
import { SuperButton } from '../SuperButton';

export const PasswordSuccessfulChanged = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toLoginHandler = (): void => {
    dispatch(changePasswordAC(true));
    navigate(PATH.LOGIN);
  };

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI1pcPQ-tGJ2__PGLM1vcuqWGAtPoEMQuUA&usqp=CAU"
        alt="password-changed-successfully"
      />
      <h1>Password Updated!</h1>
      <div>
        <p>
          Your password has been changed successfully. Use your new password to log in.
        </p>
        <SuperButton onClick={toLoginHandler}>Login</SuperButton>
      </div>
    </div>
  );
};
