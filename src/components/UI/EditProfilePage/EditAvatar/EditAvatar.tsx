import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  EditAvatarBlock,
  EditRowBlock,
  UserImgProfile,
} from 'components/UI/EditProfilePage/style';
import { SuperButton } from 'components/UI/SuperButton';
import { TextField } from 'components/UI/TextField';
import { selectAvatarProfile, selectNameProfile } from 'store/selectors/selectProfile';
import { editPersonalAvatarTC } from 'store/thunks/profileThunks';

export const EditAvatar = (): ReactElement => {
  const dispatch = useDispatch();

  const name = useSelector(selectNameProfile);
  const avatar = useSelector(selectAvatarProfile);

  const [newAvatar, setNewAvatar] = useState<string>(avatar);
  const [editAvatar, setEditAvatar] = useState<boolean>(true);

  const changeAvatarHandler = (): void => setEditAvatar(false);
  const cancelChangeAvatar = (): void => setEditAvatar(true);

  const changePersonalAvatarHandler = (): void => {
    dispatch(editPersonalAvatarTC(name, newAvatar));
    setEditAvatar(true);
  };
  const changeAvatarUrlHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewAvatar(e.currentTarget.value);
  };

  return (
    <EditAvatarBlock>
      <UserImgProfile src={avatar} alt="avatar-user" />
      {editAvatar ? (
        <SuperButton onClick={changeAvatarHandler}>Change avatar</SuperButton>
      ) : (
        <EditRowBlock>
          <TextField type="url" onChange={changeAvatarUrlHandler} autoFocus />
          <SuperButton onClick={changePersonalAvatarHandler}>Save</SuperButton>
          <SuperButton onClick={cancelChangeAvatar}>Cancel</SuperButton>
        </EditRowBlock>
      )}
    </EditAvatarBlock>
  );
};
