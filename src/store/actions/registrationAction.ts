import { StatusType } from 'types';

export const SET_REGISTRATION_IS_COMPLETED = 'REGISTRATION/SET_REGISTRATION_IS_COMPLETED';
export const SET_STATUS = 'REGISTRATION/SET_STATUS';

export const setRegistrationIsCompleted = (isCompleted: boolean) =>
  ({
    type: SET_REGISTRATION_IS_COMPLETED,
    payload: {
      isCompleted,
    },
  } as const);

export const setStatus = (status: StatusType) =>
  ({
    type: SET_STATUS,
    payload: {
      status,
    },
  } as const);