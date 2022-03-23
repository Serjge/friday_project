import { packApi } from 'api/packApi';
import { StatusCode } from 'enum';
import { rerenderPackAC, setResultMessageAddPackAC } from 'store/actions';
import { AppThunkType } from 'types';
import { handleError } from 'utils';

export const addPackTC =
  (newTitle: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await packApi.setNewPack(newTitle);

      if (status === StatusCode.Created) {
        dispatch(setResultMessageAddPackAC('Pack created'));
        dispatch(rerenderPackAC());
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
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
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };
