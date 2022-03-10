import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../enum';
import {
  EditAvatarBlock,
  EditBlock,
  EditNameBlock,
  EditNameRowBlock,
  EditPersonalInfo,
  EditProfileBlock,
  ShadowEditProfileBlock,
  SpanEditProfile,
  UserImgProfile,
} from '../../../pages/Profile/style';
import { EditProfileAC } from '../../../store/actions/ProfileAction';
import {
  selectAvatarProfile,
  selectNameProfile,
  selectNeedEditProfile,
} from '../../../store/selectors/selectProfile';
import {
  editPersonalAvatarTC,
  editProfileNameTC,
} from '../../../store/thunks/profileThunks';
import { SuperButton } from '../SuperButton';
import { TextField } from '../TextField';

export const EditProfilePage = (): ReactElement => {
  const dispatch = useDispatch();

  const needEdit = useSelector(selectNeedEditProfile);
  const name = useSelector(selectNameProfile);
  const avatar = useSelector(selectAvatarProfile);

  const [newName, setNewName] = useState<string>(name);
  const [editName, setEditName] = useState<boolean>(true);
  const [newAvatar, setNewAvatar] = useState<string>(avatar);
  const [editAvatar, setEditAvatar] = useState<boolean>(true);

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
  const changePersonalAvatarHandler = (): void => {
    dispatch(editPersonalAvatarTC(newName, newAvatar));
    setEditAvatar(true);
  };

  const applyNewNameHandler = (): void => setEditName(false);
  const cancelWriteNewNameHandler = (): void => setEditName(true);
  const changeAvatarHandler = (): void => setEditAvatar(false);
  const cancelChangeAvatar = (): void => setEditAvatar(true);
  const changeAvatarUrlHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewAvatar(e.currentTarget.value);
  };

  if (!needEdit) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <EditProfileBlock>
      <EditPersonalInfo>
        <h1>Personal information</h1>
        <EditAvatarBlock>
          <UserImgProfile src={avatar} alt="avatar-user" />
          {editAvatar ? (
            <SuperButton onClick={changeAvatarHandler}>Change avatar</SuperButton>
          ) : (
            <EditNameRowBlock>
              <TextField type="url" onChange={changeAvatarUrlHandler} autoFocus />
              <SuperButton onClick={changePersonalAvatarHandler}>Save</SuperButton>
              <SuperButton onClick={cancelChangeAvatar}>Cancel</SuperButton>
            </EditNameRowBlock>
          )}
        </EditAvatarBlock>
        <EditNameBlock>
          {editName ? (
            <EditBlock>
              <h3>Name</h3>
              <EditNameRowBlock>
                <SpanEditProfile>{name}</SpanEditProfile>
                <SuperButton onClick={applyNewNameHandler}>Change Name</SuperButton>
              </EditNameRowBlock>
              <ShadowEditProfileBlock>{}</ShadowEditProfileBlock>
            </EditBlock>
          ) : (
            <EditBlock>
              <h3>Name</h3>
              <EditNameRowBlock>
                <SpanEditProfile>{name}</SpanEditProfile>
                <SuperButton onClick={cancelWriteNewNameHandler}>Cancel</SuperButton>
              </EditNameRowBlock>
              <h3>New Name</h3>
              <EditNameRowBlock>
                <TextField value={newName} onChange={changeNameHandler} autoFocus />
                <SuperButton onClick={changePersonalNameHandler}>Save</SuperButton>
              </EditNameRowBlock>
            </EditBlock>
          )}
        </EditNameBlock>
        <SuperButton onClick={exitEditModule}>Cancel</SuperButton>
      </EditPersonalInfo>
    </EditProfileBlock>
  );
};
