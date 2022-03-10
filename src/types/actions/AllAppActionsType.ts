import { initializeMe, setErrorMessage } from 'store/actions';
import { ProfileActionType } from '../ProfileType';

import { ExampleActionsType, RegistrationActionType } from 'types/actions';
import { LoginActionType } from 'types/actions/LoginActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType;

export type AppActionsType = SetErrorMessageType | InitializeMeType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
export type InitializeMeType = ReturnType<typeof initializeMe>;
