import { initializeMeAC, setErrorMessageAC } from 'store/actions';
import { appReducer, InitialStateType } from 'store/reducers/appReducer';

let initialState: InitialStateType;
let error: string;
let notError: string;
let newInitializeValue: boolean;

beforeEach(() => {
  initialState = {
    errorMessage: '',
    isInitialize: false,
    isLoading: false,
  };
  error = 'some error';
  notError = '';
  newInitializeValue = true;
});

test('set error message', () => {
  const action = setErrorMessageAC(error);

  const endState = appReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.errorMessage).toBe(error);
  expect(initialState.errorMessage).toBe(notError);
});

test('set initialized', () => {
  const action = initializeMeAC(newInitializeValue);

  const endState = appReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.isInitialize).toBeTruthy();
  expect(initialState.isInitialize).toBeFalsy();
});
