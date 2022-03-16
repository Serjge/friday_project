import { initializeMe, setErrorMessage } from 'store/actions';
import { appReducer, InitialStateType } from 'store/reducers/appReducer';

let initialState: InitialStateType;
let error: string;
let notError: string;
let newInitializeValue: boolean;

beforeEach(() => {
  initialState = {
    errorMessage: '',
    isInitialize: false,
  };
  error = 'some error';
  notError = '';
  newInitializeValue = true;
});

test('set error message', () => {
  const action = setErrorMessage(error);

  const endState = appReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.errorMessage).toBe(error);
  expect(initialState.errorMessage).toBe(notError);
});

test('set initialized', () => {
  const action = initializeMe(newInitializeValue);

  const endState = appReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.isInitialize).toBeTruthy();
  expect(initialState.isInitialize).toBeFalsy();
});
