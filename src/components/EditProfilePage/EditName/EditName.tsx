import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SuperButton, TextField } from 'components';
import {
  EditBlock,
  EditNameBlock,
  EditRowBlock,
  ShadowEditProfileBlock,
  SpanEditProfile,
} from 'components/EditProfilePage/style';
import { selectNameProfile } from 'store/selectors';
import { editProfileNameTC } from 'store/thunks';

export const EditName = (): ReactElement => {
  const dispatch = useDispatch();

  const name = useSelector(selectNameProfile);

  const [editName, setEditName] = useState<boolean>(true);
  const [newName, setNewName] = useState<string>(name);

  const applyNewNameHandler = (): void => setEditName(false);

  const cancelWriteNewNameHandler = (): void => setEditName(true);

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.currentTarget.value);
  };

  const changePersonalNameHandler = (): void => {
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
  );
};
