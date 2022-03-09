import { AuthMeType, EditProfileType } from '../types/ProfileType';

import { instance } from './instance';

export const profileApi = {
  authMe() {
    return instance.post<AuthMeType>('/auth/me');
  },
  editProfile(name: string) {
    return instance.post<EditProfileType>('/auth/me', name);
  },
};
