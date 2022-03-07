import { StatusType } from 'types';
import { RegistrationActionType } from 'types/actions';

type InitialStateType = {
  errorMessage: string;
  isCompleted: boolean;
  status: StatusType;
};

const initialState: InitialStateType = {
  errorMessage: '',
  isCompleted: false,
  status: 'completed',
};

export const registrationReducer = (
  state = initialState,
  action: RegistrationActionType,
): InitialStateType => {
  switch (action.type) {
    case 'registration/setErrorMessage':
      return { ...state, errorMessage: action.payload.errorMessage };
    case 'registration/setStatus':
      return { ...state, status: action.payload.status };
    case 'registration/setRegistrationIsCompleted':
      return { ...state, isCompleted: action.payload.isCompleted };
    default:
      return state;
  }
};
