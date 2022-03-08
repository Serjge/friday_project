import { StatusType } from 'types';

export const setRegistrationIsCompleted = (isCompleted: boolean) =>
  ({
    type: 'registration/setRegistrationIsCompleted',
    payload: {
      isCompleted,
    },
  } as const);

export const setErrorMessage = (errorMessage: string) =>
  ({
    type: 'registration/setErrorMessage',
    payload: {
      errorMessage,
    },
  } as const);

export const setStatus = (status: StatusType) =>
  ({
    type: 'registration/setStatus',
    payload: {
      status,
    },
  } as const);
