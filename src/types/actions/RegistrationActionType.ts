import { setRegistrationIsCompleted, setStatus } from 'store/actions';

export type SetIsCompletedType = ReturnType<typeof setRegistrationIsCompleted>;

export type SetStatusType = ReturnType<typeof setStatus>;

export type RegistrationActionType = SetIsCompletedType | SetStatusType;
