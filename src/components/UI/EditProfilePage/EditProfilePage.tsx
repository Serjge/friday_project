import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../enum';
import { RootReducerType } from '../../../store';
import { EditProfileAC } from '../../../store/actions/ProfileAction';
import { SuperButton } from '../SuperButton';

const EditProfilePage = (): ReactElement => {
  const dispatch = useDispatch();
  const needEdit = useSelector<RootReducerType, boolean>(state => state.profile.needEdit);
  const exitEditModule = (): void => {
    dispatch(EditProfileAC(false));
  };
  if (!needEdit) {
    return <Navigate to={PATH.PROFILE} />;
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: ' 100px',
          flexDirection: 'column',
        }}
      >
        <h1>Personal information</h1>
        <p>Your foto could be here</p>
        <h2>name</h2>
        <h2>email</h2>
      </div>
      <div>
        <SuperButton onClick={exitEditModule}>Cancel</SuperButton>
        <SuperButton>Apply</SuperButton>
      </div>
    </div>
  );
};
export default EditProfilePage;
