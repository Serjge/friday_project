import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../enum';
import { EditProfileAC } from '../../../store/actions/ProfileAction';
import {
  selectNameProfile,
  selectNeedEditProfile,
} from '../../../store/selectors/selectProfile';
import { editProfileNameTC } from '../../../store/thunks/profileThunks';
import { SuperButton } from '../SuperButton';
import { TextField } from '../TextField';

import { EditAvatar } from 'components/UI/EditProfilePage/EditAvatar/EditAvatar';
import {
  EditBlock,
  EditNameBlock,
  EditRowBlock,
  EditPersonalInfo,
  EditProfileBlock,
  ShadowEditProfileBlock,
  SpanEditProfile,
} from 'components/UI/EditProfilePage/style';

export const EditProfilePage = (): ReactElement => {
  const dispatch = useDispatch();

  const needEdit = useSelector(selectNeedEditProfile);
  const name = useSelector(selectNameProfile);

  const [newName, setNewName] = useState<string>(name);
  const [editName, setEditName] = useState<boolean>(true);

  const exitEditModule = (): void => {
    dispatch(EditProfileAC(false));
  };

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.currentTarget.value);
  };

  const changePersonalNameHandler = (): void => {
    dispatch(editProfileNameTC(newName));
    setEditName(true);
  };

  const applyNewNameHandler = (): void => setEditName(false);
  const cancelWriteNewNameHandler = (): void => setEditName(true);

  if (!needEdit) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <EditProfileBlock>
      <EditPersonalInfo>
        <h1>Personal information</h1>
        <EditAvatar name={newName} />
        <EditNameBlock>
          {editName ? (
            <EditBlock>
              <h3>Name</h3>
              <EditRowBlock>
                <SpanEditProfile>{name}</SpanEditProfile>
                <SuperButton onClick={applyNewNameHandler}>Change Name</SuperButton>
              </EditRowBlock>
              <ShadowEditProfileBlock>{}</ShadowEditProfileBlock>
            </EditBlock>
          ) : (
            <EditBlock>
              <h3>Name</h3>
              <EditRowBlock>
                <SpanEditProfile>{name}</SpanEditProfile>
                <SuperButton onClick={cancelWriteNewNameHandler}>Cancel</SuperButton>
              </EditRowBlock>
              <h3>New Name</h3>
              <EditRowBlock>
                <TextField value={newName} onChange={changeNameHandler} autoFocus />
                <SuperButton onClick={changePersonalNameHandler}>Save</SuperButton>
              </EditRowBlock>
            </EditBlock>
          )}
        </EditNameBlock>
        <SuperButton onClick={exitEditModule}>Cancel</SuperButton>
      </EditPersonalInfo>
    </EditProfileBlock>
  );
};
