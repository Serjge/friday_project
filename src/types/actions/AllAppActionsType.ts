import { ProfileActionType } from '../ProfileType';

import {
  AppActionsType,
  ExampleActionsType,
  RegistrationActionType,
} from 'types/actions';
import { LoginActionType } from 'types/actions/LoginActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType;
