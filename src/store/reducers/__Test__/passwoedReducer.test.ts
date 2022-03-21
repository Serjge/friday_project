import { changePasswordAC } from 'store/actions';
import { IsPasswordChangeType, passwordReducer } from 'store/reducers/passwordReducer';

let initialState: IsPasswordChangeType;
let isChange: boolean;
beforeEach(() => {
  initialState = {
    isChange: false,
  };
  isChange = true;
});

test('set error message', () => {
  const action = changePasswordAC(isChange);

  const endState = passwordReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.isChange).toBe(isChange);
});
