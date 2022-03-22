import { StatusType } from 'types';

export const SET_REGISTRATION_IS_COMPLETED = 'REGISTRATION/SET_REGISTRATION_IS_COMPLETED';
export const SET_STATUS = 'REGISTRATION/SET_STATUS';

export const setRegistrationIsCompletedAC = (isCompleted: boolean) =>
  ({
    type: SET_REGISTRATION_IS_COMPLETED,
    payload: {
      isCompleted,
    },
  } as const);

export const setStatusAC = (status: StatusType) =>
  ({
    type: SET_STATUS,
    payload: {
      status,
    },
  } as const);
