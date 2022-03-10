import { initializeMe, setErrorMessage } from 'store/actions';

export type AppActionsType = SetErrorMessageType | InitializeMeType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
export type InitializeMeType = ReturnType<typeof initializeMe>;
