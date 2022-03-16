import {
  AddPackActionsType,
  AppActionsType,
  PacksActionType,
  LoginActionType,
  ProfileActionType,
  RegistrationActionType,
  CardsActionType,
} from 'store/actions';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ProfileActionType
  | PacksActionType
  | AddPackActionsType
  | CardsActionType;
