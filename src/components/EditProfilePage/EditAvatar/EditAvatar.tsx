import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { UserImgProfile, EditRowBlock, EditAvatarBlock } from '../style';

import { SuperButton, TextField } from 'components';
import { selectAvatarProfile } from 'store/selectors';
import { editPersonalAvatarTC } from 'store/thunks';

export const EditAvatar = (): ReactElement => {
  const dispatch = useDispatch();

  const avatar = useSelector(selectAvatarProfile);

  const [newAvatar, setNewAvatar] = useState<string>(avatar);
  const [editAvatar, setEditAvatar] = useState<boolean>(true);

  const changeAvatarHandler = (): void => setEditAvatar(false);
  const cancelChangeAvatar = (): void => setEditAvatar(true);

  const changePersonalAvatarHandler = (): void => {
    dispatch(editPersonalAvatarTC(newAvatar));
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
          <TextField
            type="url"
            placeholder="Please, insert new avatar URL"
            onChange={changeAvatarUrlHandler}
            autoFocus
          />
          <SuperButton onClick={changePersonalAvatarHandler}>Save</SuperButton>
          <SuperButton onClick={cancelChangeAvatar}>Cancel</SuperButton>
        </EditRowBlock>
      )}
    </EditAvatarBlock>
  );
};