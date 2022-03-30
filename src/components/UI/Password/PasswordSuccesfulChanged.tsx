import { ReactElement } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SuperButton } from 'components';
import { PATH } from 'enum';
import { changePasswordAC } from 'store/actions';
import { HelpText, Wrapper } from 'styles';

export const PasswordSuccessfulChanged = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toLoginHandler = (): void => {
    dispatch(changePasswordAC(true));
    navigate(PATH.LOGIN);
  };

  return (
    <Wrapper>
      <h1>Password Updated!</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI1pcPQ-tGJ2__PGLM1vcuqWGAtPoEMQuUA&usqp=CAU"
        alt="password-changed-successfully"
      />

      <HelpText>
        Your password has been changed successfully. Use your new password to log in.
      </HelpText>
      <SuperButton size="big" marginTop="90px" onClick={toLoginHandler}>
        Login
      </SuperButton>
    </Wrapper>
  );
};
