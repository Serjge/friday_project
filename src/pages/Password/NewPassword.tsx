import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { PasswordSuccessfulChanged } from '../../components/UI/Password/PasswordSuccesfulChanged';
import { WriteNewPassword } from '../../components/UI/Password/WriteNewPassword';
import { RootReducerType } from '../../store';

export const NewPassword = (): ReactElement => {
  const isChanged = useSelector<RootReducerType, boolean>(
    state => state.password.isChange,
  );

  return isChanged ? <WriteNewPassword /> : <PasswordSuccessfulChanged />;
};
