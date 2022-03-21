import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { PasswordSuccessfulChanged } from '../../components/UI/Password/PasswordSuccesfulChanged';
import { WriteNewPassword } from '../../components/UI/Password/WriteNewPassword';
import { selectPassword } from '../../store/selectors/selectPassword';

export const NewPassword = (): ReactElement => {
  const isChanged = useSelector(selectPassword);

  return isChanged ? <WriteNewPassword /> : <PasswordSuccessfulChanged />;
};
