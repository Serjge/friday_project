import { RootReducerType } from '../store';

export const selectNeedEditProfile = (state: RootReducerType): boolean =>
  state.profile.needEdit;

export const selectNameProfile = (state: RootReducerType): string =>
  state.profile.profileData.name;

export const selectPublicCardPacksCountProfile = (state: RootReducerType): number =>
  state.profile.profileData.publicCardPacksCount;

export const selectAvatarProfile = (state: RootReducerType): string =>
  state.profile.profileData.avatar;

export const selectUserId = (state: RootReducerType): string =>
  // eslint-disable-next-line no-underscore-dangle
  state.profile.profileData._id;
