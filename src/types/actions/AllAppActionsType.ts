import {
  AppActionsType,
  CardsActionType,
  ExampleActionsType,
  LoginActionType,
  ProfileActionType,
  RegistrationActionType,
} from 'types/actions';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType
  | CardsActionType;
