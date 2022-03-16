import {
  AppActionsType,
  CardActionType,
  CardsActionType,
  ExampleActionsType,
  LoginActionType,
  ProfileActionType,
  RegistrationActionType,
  SetSearchAnswerType,
} from 'types/actions';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType
  | CardsActionType
  | CardActionType;
