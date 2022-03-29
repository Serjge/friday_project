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
  const [isAvatarEdit, setIsAvatarEdit] = useState<boolean>(true);

  const openChangeAvatarModuleOnClick = (): void => setIsAvatarEdit(false);

  const closeChangeAvatarModuleOnClick = (): void => setIsAvatarEdit(true);

  const handleNewAvatarOnClick = (): void => {
    dispatch(editPersonalAvatarTC(newAvatar));
    setIsAvatarEdit(true);
  };

  const writeNewAvatarUrlOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewAvatar(e.currentTarget.value);
  };

  return (
    <EditAvatarBlock>
      <UserImgProfile src={avatar} alt="avatar-user" />
      {isAvatarEdit ? (
        <SuperButton onClick={openChangeAvatarModuleOnClick}>Change avatar</SuperButton>
      ) : (
        <EditRowBlock>
          <TextField
            type="url"
            placeholder="Please, insert new avatar URL"
            onChange={writeNewAvatarUrlOnChange}
            autoFocus
          />
          <SuperButton onClick={handleNewAvatarOnClick}>Save</SuperButton>
          <SuperButton onClick={closeChangeAvatarModuleOnClick}>Cancel</SuperButton>
        </EditRowBlock>
      )}
    </EditAvatarBlock>
  );
};
