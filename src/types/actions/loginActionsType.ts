import { seLoginDataAC, setErrorAC, setLogOutAC } from 'store/actions';

export type SeLoginDataACType = ReturnType<typeof seLoginDataAC>;
export type SeErrorACType = ReturnType<typeof setErrorAC>;
export type SeLogOutACType = ReturnType<typeof setLogOutAC>;
