export const SET_ERROR_MESSAGE = 'REGISTRATION/SET_ERROR_MESSAGE';

export const setErrorMessage = (errorMessage: string) =>
  ({
    type: SET_ERROR_MESSAGE,
    payload: {
      errorMessage,
    },
  } as const);
