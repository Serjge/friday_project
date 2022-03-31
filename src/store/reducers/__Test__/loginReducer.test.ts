import { setIsLoginAC } from 'store/actions';
import { loginReducer, LoginStateWithErrorKey } from 'store/reducers/loginReducer';

let initialState: LoginStateWithErrorKey;

beforeEach(() => {
  initialState = {
    isLogin: false,
  };
});

describe('login reducer', () => {
  test('change isLogin', () => {
    const action = setIsLoginAC(true);

    const endState = loginReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.isLogin).toBeTruthy();
    expect(initialState.isLogin).toBeFalsy();
  });
});
