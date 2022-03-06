import { StatusType } from 'types';
import { RegistrationActionType } from 'types/actions';

type InitialStateType = {
  error: string;
  IsCompleted: boolean;
  status: StatusType;
};

const initialState: InitialStateType = {
  error: '',
  IsCompleted: false,
  status: 'completed',
};

export const registrationReducer = (
  state = initialState,
  action: RegistrationActionType,
): InitialStateType => {
  switch (action.type) {
    case 'registration/setError':
      return { ...state, error: action.payload.error };
    case 'registration/setStatus':
      return { ...state, status: action.payload.status };
    case 'registration/setIsCompleted':
      return { ...state, IsCompleted: action.payload.isCompleted };
    default:
      return state;
  }
};
