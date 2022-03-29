import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  EditBlock,
  EditNameBlock,
  EditRowBlock,
  ShadowEditProfileBlock,
  SpanEditProfile,
} from '../style';

import { SuperButton, TextField } from 'components';
import { selectNameProfile } from 'store/selectors';
import { editProfileNameTC } from 'store/thunks';

export const EditName = (): ReactElement => {
  const dispatch = useDispatch();

  const name = useSelector(selectNameProfile);

  const [editName, setEditName] = useState<boolean>(true);
  const [newName, setNewName] = useState<string>(name);

  const openChangeProfileNameModuleOnClick = (): void => setEditName(false);

  const closeChangeProfileNameModuleOnClick = (): void => setEditName(true);

  const writeNewProfileNameOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.currentTarget.value);
  };

  const handleNewProfileNameOnClick = (): void => {
    dispatch(editProfileNameTC(newName));
    setEditName(true);
  };

  return (
    <EditNameBlock>
      {editName ? (
        <EditBlock>
          <h3>Name</h3>
          <EditRowBlock>
            <SpanEditProfile>{name}</SpanEditProfile>
            <SuperButton onClick={openChangeProfileNameModuleOnClick}>
              Change Name
            </SuperButton>
          </EditRowBlock>
          <ShadowEditProfileBlock>{}</ShadowEditProfileBlock>
        </EditBlock>
      ) : (
        <EditBlock>
          <h3>Name</h3>
          <EditRowBlock>
            <SpanEditProfile>{name}</SpanEditProfile>
            <SuperButton onClick={closeChangeProfileNameModuleOnClick}>
              Cancel
            </SuperButton>
          </EditRowBlock>
          <h3>New Name</h3>
          <EditRowBlock>
            <TextField value={newName} onChange={writeNewProfileNameOnChange} autoFocus />
            <SuperButton onClick={handleNewProfileNameOnClick}>Save</SuperButton>
          </EditRowBlock>
        </EditBlock>
      )}
    </EditNameBlock>
  );
};
