import { setError, setIsCompleted, setStatus } from 'store/actions';

export type SetIsCompletedType = ReturnType<typeof setIsCompleted>;
export type SetErrorType = ReturnType<typeof setError>;
export type SetStatusType = ReturnType<typeof setStatus>;

export type RegistrationActionType = SetIsCompletedType | SetErrorType | SetStatusType;
