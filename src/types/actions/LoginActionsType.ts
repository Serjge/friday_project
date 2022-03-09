import { seLoginDataAC, setLogOutAC } from 'store/actions';

export type LoginActionType = SeLoginDataACType | SeLogOutACType;

export type SeLoginDataACType = ReturnType<typeof seLoginDataAC>;
export type SeLogOutACType = ReturnType<typeof setLogOutAC>;
