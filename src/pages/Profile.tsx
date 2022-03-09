import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SuperButton } from '../components';
import EditProfilePage from '../components/UI/EditProfilePage/EditProfilePage';
import { RootReducerType } from '../store';
import { EditProfileAC } from '../store/actions/ProfileAction';

export const Profile = (): ReactElement => {
  const dispatch = useDispatch();
  const needEdit = useSelector<RootReducerType, boolean>(state => state.profile.needEdit);
  const name = useSelector<RootReducerType, string>(state => state.profile.name);
  const publicCardPacksCount = useSelector<RootReducerType, number>(
    state => state.profile.publicCardPacksCount,
  );
  const editModule = (): void => {
    dispatch(EditProfileAC(true));
  };
  if (needEdit) {
    return <EditProfilePage />;
  }
  return (
    <div>
      <h1>Profile</h1>
      <h2>Your foto could be here</h2>
      <h2>{name}</h2>
      <h2>Number of cards: {publicCardPacksCount}</h2>
      <SuperButton onClick={editModule}>Edite profile</SuperButton>
    </div>
  );
};
