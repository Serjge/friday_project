import { setErrorMessage, setRegistrationIsCompleted, setStatus } from 'store/actions';

export type SetIsCompletedType = ReturnType<typeof setRegistrationIsCompleted>;
export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
export type SetStatusType = ReturnType<typeof setStatus>;

export type RegistrationActionType =
  | SetIsCompletedType
  | SetErrorMessageType
  | SetStatusType;
