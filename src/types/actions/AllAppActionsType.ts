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
import { AddPackActionsType } from 'types/actions/AddPackActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType
  | CardsActionType
  | AddPackActionsType
  | CardsActionType
  | CardActionType;
