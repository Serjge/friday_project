import { UndefinedAnd } from 'types';

// export type GetErrorValidate = 'required' | 'minLength' | 'validate' | 'pattern'; // оставил, чтобы куда-нибудь добавить. Или здесь или в общий тип отправить.

export const getErrorValidate = (type: UndefinedAnd<string>): UndefinedAnd<string> => {
  switch (type) {
    case 'required':
      return 'This field is required';

    case 'minLength':
      return 'Minimum 8 characters required';

    case 'validate':
      return 'Passwords must match';

    case 'pattern':
      return 'Wrong or Invalid email address';

    default:
      return undefined;
  }
};
