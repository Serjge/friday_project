export const SET_ADD_MOD = 'ADD_PACK/SET_ADD_MOD';
export const SET_RESULT_MESSAGE = 'ADD_PACK/SET_RESULT_MESSAGE';

export const setAddModAC = (isAddMod: boolean) =>
  ({
    type: SET_ADD_MOD,
    payload: {
      isAddMod,
    },
  } as const);

export const setResultMessageAddPackAC = (message: string) =>
  ({
    type: SET_RESULT_MESSAGE,
    payload: {
      message,
    },
  } as const);
