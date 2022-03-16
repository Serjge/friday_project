import { initializeMe, setErrorMessage } from 'store/actions/index';

export type AppActionsType = SetErrorMessageType | InitializeMeType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
export type InitializeMeType = ReturnType<typeof initializeMe>;
