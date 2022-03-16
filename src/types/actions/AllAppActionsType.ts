import {
  AppActionsType,
  CardsActionType,
  ExampleActionsType,
  LoginActionType,
  ProfileActionType,
  RegistrationActionType,
} from 'types/actions';
import { AddPackActionsType } from 'types/actions/AddPackActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType
  | CardsActionType
  | AddPackActionsType;
