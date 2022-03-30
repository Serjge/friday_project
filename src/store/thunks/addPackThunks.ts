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
        dispatch(rerenderPackAC());
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const editTitlePackTC =
  (id: string, newTitle: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await packApi.editTitlePack(id, newTitle);

      if (status === StatusCode.Success) {
        dispatch(setResultMessageAddPackAC('Pack name changed'));
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
      const { status } = await packApi.deletePack(packId);
      if (status === StatusCode.Success) {
        dispatch(rerenderPackAC());
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };
