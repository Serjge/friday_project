import {
  SeErrorACType,
  SeLoginDataACType,
  SeLogOutACType,
} from 'store/reducers/loginReducer';
import { ExampleActionsType, RegistrationActionType } from 'types/actions';

export type AppActionsType =
  | ExampleActionsType
  | SeLoginDataACType
  | SeErrorACType
  | SeLogOutACType
  |RegistrationActionType;
