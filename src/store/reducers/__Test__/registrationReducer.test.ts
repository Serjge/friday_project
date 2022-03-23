import { setRegistrationIsCompletedAC, setStatusAC } from 'store/actions';
import {
  InitialStateType,
  registrationReducer,
} from 'store/reducers/registrationReducer';
import { StatusType } from 'types';

let initialState: InitialStateType;
let isCompleted: boolean;
let newStatus: StatusType;

beforeEach(() => {
  initialState = {
    isCompleted: false,
    status: 'loading',
  };
  isCompleted = true;
  newStatus = 'completed';
});

test('set statue', () => {
  const action = setStatusAC(newStatus);

  const endState = registrationReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.status).toBe(newStatus);
});

test('set registration', () => {
  const action = setRegistrationIsCompletedAC(isCompleted);

  const endState = registrationReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.isCompleted).toBeTruthy();
});
