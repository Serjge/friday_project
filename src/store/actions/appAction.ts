export const SET_ERROR_MESSAGE = 'APP/SET_ERROR_MESSAGE';
export const INITIALIZE_ME = 'APP/INITIALIZE_ME';

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: SET_ERROR_MESSAGE,
    payload: {
      errorMessage,
    },
  } as const);

export const initializeMeAC = (isInitialize: boolean) =>
  ({
    type: INITIALIZE_ME,
    payload: {
      isInitialize,
    },
  } as const);
