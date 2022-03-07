import { NullAnd, UndefinedAnd } from 'types';

export const getErrorValidate = (type: UndefinedAnd<string>): NullAnd<string> => {
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
      return null;
  }
};
