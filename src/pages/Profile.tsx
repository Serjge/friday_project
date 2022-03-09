import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SuperButton } from '../components';
import EditProfilePage from '../components/UI/EditProfilePage/EditProfilePage';
import { EditProfileAC } from '../store/actions/ProfileAction';
import {
  selectNameProfile,
  selectNeedEditProfile,
  selectPublicCardPacksCountProfile,
} from '../store/selectors/selectProfile';
import { authMeTC } from '../store/thunks/profileThunks';

export const Profile = (): ReactElement => {
  const dispatch = useDispatch();

  const needEdit = useSelector(selectNeedEditProfile);
  const name = useSelector(selectNameProfile);
  const publicCardPacksCount = useSelector(selectPublicCardPacksCountProfile);

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
      <SuperButton onClick={() => dispatch(authMeTC())}>
        Give Data From Server
      </SuperButton>
    </div>
  );
};
