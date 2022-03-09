// import {
//   SeErrorACType,
//   SeLoginDataACType,
//   SeLogOutACType,
// } from 'store/reducers/loginReducer';
import {
  ExampleActionsType,
  RegistrationActionType,
  SeLoginDataACType,
  SeLogOutACType,
} from 'types/actions';

export type AppActionsType =
  | ExampleActionsType
  | SeLoginDataACType
  | SeLogOutACType
  | RegistrationActionType;

// | SeErrorACType
