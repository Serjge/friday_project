import { initializeMeAC, setErrorMessageAC } from 'store/actions/index';

export type AppActionsType = SetErrorMessageType | InitializeMeType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessageAC>;
export type InitializeMeType = ReturnType<typeof initializeMeAC>;
