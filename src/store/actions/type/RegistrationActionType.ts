import { setRegistrationIsCompletedAC, setStatusAC } from 'store/actions';

export type SetIsCompletedType = ReturnType<typeof setRegistrationIsCompletedAC>;
export type SetStatusType = ReturnType<typeof setStatusAC>;

export type RegistrationActionType = SetIsCompletedType | SetStatusType;
