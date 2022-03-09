import { RootReducerType } from '../store';

export const selectNeedEditProfile = (state: RootReducerType): boolean =>
  state.profile.needEdit;
export const selectNameProfile = (state: RootReducerType): string => state.profile.name;
export const selectPublicCardPacksCountProfile = (state: RootReducerType): number =>
  state.profile.publicCardPacksCount;
export const selectEmailProfile = (state: RootReducerType): string => state.profile.email;
