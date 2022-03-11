import { SET_REGISTRATION_IS_COMPLETED, SET_STATUS } from 'store/actions';
import { StatusType } from 'types';
import { RegistrationActionType } from 'types/actions';

export type InitialStateType = {
  isCompleted: boolean;
  status: StatusType;
};

const initialState: InitialStateType = {
  isCompleted: false,
  status: 'completed',
};

export const registrationReducer = (
  state = initialState,
  action: RegistrationActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.payload.status };
    case SET_REGISTRATION_IS_COMPLETED:
      return { ...state, isCompleted: action.payload.isCompleted };
    default:
      return state;
  }
};
