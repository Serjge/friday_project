import { AxiosError } from 'axios';

import { packApi } from 'api/packApi';
import { StatusCode } from 'enum';
import { rerenderPackAC, setResultMessageAddPackAC } from 'store/actions';
import { AppThunkType } from 'types';

export const addPackTC =
  (newTitle: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await packApi.setNewPack(newTitle);

      if (status === StatusCode.Created) {
        dispatch(setResultMessageAddPackAC('Pack created'));
        dispatch(rerenderPackAC());
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === StatusCode.Bad_Request) {
        dispatch(setResultMessageAddPackAC(error));
      } else {
        dispatch(setResultMessageAddPackAC(message));
      }
    }
  };

export const deletePackTC =
  (packId: string): AppThunkType =>
  async dispatch => {
    try {
      const response = await packApi.deletePack(packId);
      if (response.status === StatusCode.Success) {
        dispatch(rerenderPackAC());
      }
    } catch (errorCatch) {
      const { message } = errorCatch as AxiosError;
      console.warn(message);
    }
  };
