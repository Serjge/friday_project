import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { WriteNewPassword, PasswordSuccessfulChanged } from 'components';
import { selectPassword } from 'store/selectors';

export const NewPassword = (): ReactElement => {
  const isChanged = useSelector(selectPassword);

  if (isChanged) {
    return <WriteNewPassword />;
  }

  return <PasswordSuccessfulChanged />;
};
