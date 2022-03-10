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
import { editProfileTC } from '../../../store/thunks/profileThunks';
import { SuperButton } from '../SuperButton';
import { TextField } from '../TextField';

const EditProfilePage = (): ReactElement => {
  const dispatch = useDispatch();
  const needEdit = useSelector(selectNeedEditProfile);
  const name = useSelector(selectNameProfile);
  const avatar = useSelector(selectAvatarProfile);

  const [newName, setNewName] = useState<string>(name);
  const [editName, setEditName] = useState<boolean>(true);

  const exitEditModule = (): void => {
    dispatch(EditProfileAC(false));
  };

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.currentTarget.value);
  };

  const changePersonalInfoHandler = (): void => {
    dispatch(editProfileTC(newName));
    setEditName(true);
  };

  const writeNewNameHandler = (): void => setEditName(false);
  const cancelWriteNewNameHandler = (): void => setEditName(true);

  if (!needEdit) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <EditProfileBlock>
      <EditPersonalInfo>
        <h1>Personal information</h1>
        <EditAvatarBlock>
          <UserImgProfile src={avatar} alt="avatar-user" />
          <SuperButton>Change avatar</SuperButton>
        </EditAvatarBlock>
        <EditNameBlock>
          {editName ? (
            <EditBlock>
              <h3>Name</h3>
              <EditNameRowBlock>
                <SpanEditProfile>{name}</SpanEditProfile>
                <SuperButton onClick={writeNewNameHandler}>Change Name</SuperButton>
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
                <SuperButton onClick={changePersonalInfoHandler}>Save</SuperButton>
              </EditNameRowBlock>
            </EditBlock>
          )}
        </EditNameBlock>
        <SuperButton onClick={exitEditModule}>Cancel</SuperButton>
      </EditPersonalInfo>
    </EditProfileBlock>
  );
};
export default EditProfilePage;
