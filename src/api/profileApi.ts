import { instance } from 'api';
import { AuthMeType, EditProfileType } from 'types';

export const profileApi = {
  authMe() {
    return instance.post<AuthMeType>('/auth/me');
  },
  editPersonalName(name: string) {
    return instance.put<EditProfileType>('/auth/me', { name });
  },
  editPersonalAvatar(avatar: string) {
    return instance.put<EditProfileType>('auth/me', { avatar });
  },
};
