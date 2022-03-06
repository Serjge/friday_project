import { StatusType } from 'types';

export const setIsCompleted = (isCompleted: boolean) =>
  ({
    type: 'registration/setIsCompleted',
    payload: {
      isCompleted,
    },
  } as const);

export const setError = (error: string) =>
  ({
    type: 'registration/setError',
    payload: {
      error,
    },
  } as const);

export const setStatus = (status: StatusType) =>
  ({
    type: 'registration/setStatus',
    payload: {
      status,
    },
  } as const);
