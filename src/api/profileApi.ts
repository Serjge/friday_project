import { AuthMeType, EditProfileType } from '../types/ProfileType';

import { instance } from './instance';

export const profileApi = {
  authMe() {
    return instance.post<AuthMeType>('/auth/me');
  },
  editPersonalName(name: string) {
    return instance.put<EditProfileType>('/auth/me', { name });
  },
  editPersonalAvatar(name: string, avatar: string) {
    return instance.put<EditProfileType>('auth/me', { name, avatar });
  },
};
