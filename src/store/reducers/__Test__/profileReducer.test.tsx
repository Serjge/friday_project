import {
  AuthMeAC,
  ChangePersonalAvatarAC,
  ChangePersonalNameAC,
  EditProfileAC,
} from 'store/actions/ProfileAction';
import {
  ProfileReducer,
  ProfileStateWithErrorKeyType,
} from 'store/reducers/profileReducer';
import { AuthMeType } from 'types/ProfileType';

let initialState: ProfileStateWithErrorKeyType;
let dataFromAPI: AuthMeType;
let newNeedEditValue: boolean;
let newNameUser: string;
let newAvatarURL: string;

beforeEach(() => {
  initialState = {
    _id: '',
    email: '',
    rememberMe: false,
    isAdmin: false,
    name: '',
    verified: false,
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    __v: 0,
    token: '',
    tokenDeathTime: 0,
    avatar: '',
    error: '',
    needEdit: false,
  };
  dataFromAPI = {
    _id: 'politics',
    email: 'brick',
    rememberMe: true,
    isAdmin: true,
    name: 'window',
    verified: true,
    publicCardPacksCount: 0,
    created: 'cupboard',
    updated: 'memory',
    __v: 100,
    token: 'bean',
    tokenDeathTime: 123,
    avatar: 'sky',
  };
  newNeedEditValue = true;
  newNameUser = 'content';
  newAvatarURL = 'http://always';
});

test('change isEdit view', () => {
  const action = EditProfileAC(newNeedEditValue);

  const endState = ProfileReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.needEdit).toBeTruthy();
});

test('check Auth me', () => {
  const action = AuthMeAC(dataFromAPI);

  const endState = ProfileReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.email).toBe(dataFromAPI.email);
  expect(endState.rememberMe).toBe(dataFromAPI.rememberMe);
  expect(endState.name).toBe(dataFromAPI.name);
  expect(endState.token).toBe(dataFromAPI.token);
  expect(endState.isAdmin).toBe(dataFromAPI.isAdmin);
});

test('change Name', () => {
  const action = ChangePersonalNameAC(newNameUser);

  const endState = ProfileReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.name).toBe(newNameUser);
});

test('change person Avatar', () => {
  const action = ChangePersonalAvatarAC(newAvatarURL);

  const endState = ProfileReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.avatar).toBe(newAvatarURL);
});
