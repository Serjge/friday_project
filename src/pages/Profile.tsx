import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SuperButton } from '../components';
import { RootReducerType } from '../store';
import { EditProfileAC } from '../store/actions/editProfileAction';

export const Profile = (): ReactElement => {
  const dispatch = useDispatch();
  const name = useSelector<RootReducerType, string>(state => state.login.name);
  const editModule = (): void => {
    dispatch(EditProfileAC(true));
  };
  return (
    <div>
      <h1>Profile</h1>
      <h2>Your foto could be here</h2>
      <h2>{name}</h2>
      <SuperButton onClick={editModule}>Edite profile</SuperButton>
    </div>
  );
};
