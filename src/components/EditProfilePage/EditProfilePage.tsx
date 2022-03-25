import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { EditPersonalInfo, EditProfileBlock } from './style';

import { EditAvatar, EditName, SuperButton } from 'components';
import { PATH } from 'enum';
import { editProfileAC } from 'store/actions';
import { selectNeedEditProfile } from 'store/selectors';

export const EditProfilePage = (): ReactElement => {
  const dispatch = useDispatch();

  const isEditNeed = useSelector(selectNeedEditProfile);

  const exitEditModule = (): void => {
    dispatch(editProfileAC(false));
  };

  if (!isEditNeed) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <EditProfileBlock>
      <EditPersonalInfo>
        <h1>Personal information</h1>
        <EditAvatar />
        <EditName />
        <SuperButton onClick={exitEditModule}>Cancel</SuperButton>
      </EditPersonalInfo>
    </EditProfileBlock>
  );
};
