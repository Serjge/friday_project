import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../enum';
import { EditProfileAC } from '../../../store/actions/ProfileAction';
import { selectNeedEditProfile } from '../../../store/selectors/selectProfile';
import { SuperButton } from '../SuperButton';

import { EditAvatar } from 'components/UI/EditProfilePage/EditAvatar/EditAvatar';
import { EditName } from 'components/UI/EditProfilePage/EditName/EditName';
import { EditPersonalInfo, EditProfileBlock } from 'components/UI/EditProfilePage/style';

export const EditProfilePage = (): ReactElement => {
  const dispatch = useDispatch();

  const needEdit = useSelector(selectNeedEditProfile);

  const exitEditModule = (): void => {
    dispatch(EditProfileAC(false));
  };

  if (!needEdit) {
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
