import { setAddModAC, setResultMessageAddPackAC } from 'store/actions';
import { addPackReducer, InitialStateType } from 'store/reducers/addPackReducer';

let initialState: InitialStateType;
let isAddMod: boolean;
let message: string;

beforeEach(() => {
  initialState = {
    isAddMod: false,
    message: '',
  };
  isAddMod = true;
  message = 'some error';
});

test('set isAddMod', () => {
  const action = setAddModAC(isAddMod);

  const endState = addPackReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.isAddMod).toBe(isAddMod);
});

test('set result message from API', () => {
  const action = setResultMessageAddPackAC(message);

  const endState = addPackReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.message).toBe(message);
});
