import {
  SeErrorACType,
  SeLoginDataACType,
  SeLogOutACType,
} from 'store/reducers/loginReducer';
import { ExampleActionsType } from 'types/actions';

export type AppActionsType =
  | ExampleActionsType
  | SeLoginDataACType
  | SeErrorACType
  | SeLogOutACType;
