import {
  ExampleActionsType,
  RegistrationActionType,
  SeErrorACType,
  SeLoginDataACType,
  SeLogOutACType,
} from 'types/actions';

export type AppActionsType =
  | ExampleActionsType
  | SeLoginDataACType
  | SeErrorACType
  | SeLogOutACType
  | RegistrationActionType;
