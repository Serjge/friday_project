import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EditProfilePage, SuperButton } from 'components';
import { UserImgProfile } from 'components/UI/EditProfilePage/style';
import { EditProfileAC } from 'store/actions';
import {
  selectAvatarProfile,
  selectNameProfile,
  selectNeedEditProfile,
  selectPublicCardPacksCountProfile,
} from 'store/selectors';
import { Wrapper } from 'styles';

export const Profile = (): ReactElement => {
  const dispatch = useDispatch();

  const name = useSelector(selectNameProfile);
  const avatar = useSelector(selectAvatarProfile);
  const needEdit = useSelector(selectNeedEditProfile);
  const publicCardPacksCount = useSelector(selectPublicCardPacksCountProfile);

  const editModule = (): void => {
    dispatch(EditProfileAC(true));
  };

  if (needEdit) {
    return <EditProfilePage />;
  }

  return (
    <Wrapper>
      <h1>Profile</h1>
      <UserImgProfile src={avatar} alt="user-avatar" />
      <h2>{name}</h2>
      <h2>Number of cards: {publicCardPacksCount}</h2>
      <SuperButton onClick={editModule}>Edite profile</SuperButton>
    </Wrapper>
  );
};
