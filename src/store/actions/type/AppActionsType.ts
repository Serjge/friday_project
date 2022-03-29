import { initializeMeAC, isLoadingAC, setErrorMessageAC } from 'store/actions';

export type AppActionsType = SetErrorMessageType | InitializeMeType | IsLoadingType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessageAC>;
export type InitializeMeType = ReturnType<typeof initializeMeAC>;
export type IsLoadingType = ReturnType<typeof isLoadingAC>;
