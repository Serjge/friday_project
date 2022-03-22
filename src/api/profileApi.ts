import { instance } from 'api';
import { PATHS_API } from 'enum';
import { AuthMeType, EditProfileType } from 'types';

export const profileApi = {
  authMe() {
    return instance.post<AuthMeType>(PATHS_API.Auth_me);
  },
  editPersonalName(name: string) {
    return instance.put<EditProfileType>(PATHS_API.Auth_me, { name });
  },
  editPersonalAvatar(avatar: string) {
    return instance.put<EditProfileType>(PATHS_API.Auth_me, { avatar });
  },
};
