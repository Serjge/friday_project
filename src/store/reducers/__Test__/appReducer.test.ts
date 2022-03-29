import { initializeMeAC, isLoadingAC, setErrorMessageAC } from 'store/actions';
import { appReducer, InitialStateType } from 'store/reducers/appReducer';

let initialState: InitialStateType;
let error: string;
let notError: string;
let newInitializeValue: boolean;
let isLoading: boolean;

beforeEach(() => {
  initialState = {
    errorMessage: '',
    isInitialize: false,
    isLoading: false,
  };
  error = 'some error';
  notError = '';
  newInitializeValue = true;
  isLoading = true;
});

describe('app reducer', () => {
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

  test('set loading', () => {
    const action = isLoadingAC(isLoading);

    const endState = appReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.isLoading).toBeTruthy();
  });
});
