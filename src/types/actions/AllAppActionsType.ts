import {
  AppActionsType,
  ExampleActionsType,
  ProfileActionType,
  RegistrationActionType,
} from 'types/actions';
import { LoginActionType } from 'types/actions/LoginActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType;
