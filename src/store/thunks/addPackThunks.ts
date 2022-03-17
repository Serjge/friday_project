import { AxiosError } from 'axios';

import { packApi } from 'api/packApi';
import { statusCode } from 'enum';
import { TimeForSetTimeout } from 'enum/timeForSetTimeout';
import { setAddModAC, setResultMessageAddPackAC } from 'store/actions';
import { getPacksTC } from 'store/thunks/packsThunks';
import { AppThunkType } from 'types';

export const addPackTC =
  (newTitle: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await packApi.setNewPack(newTitle);

      if (status === statusCode.created) {
        dispatch(setResultMessageAddPackAC('Pack created'));
        dispatch(getPacksTC());
        setTimeout(() => {
          dispatch(setAddModAC(false));
        }, TimeForSetTimeout.hideAddComponentAfterSuccess);
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setResultMessageAddPackAC(error));
      } else {
        dispatch(setResultMessageAddPackAC(message));
      }
    }
  };

export const deletePackTC =
  (packId: string): AppThunkType =>
  async (dispatch, getState) => {
    const { sort } = getState().packs;
    const { page, pageCount, maxCardsCount, minCardsCount } = getState().packs.packs;
    try {
      const response = await packApi.deletePack(packId);
      if (response.status === statusCode.OK) {
        dispatch(getPacksTC('', minCardsCount, maxCardsCount, sort, pageCount, page));
      }
    } catch (errorCatch) {
      const { message } = errorCatch as AxiosError;
      console.warn(message);
    }
  };
