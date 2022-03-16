import { AxiosError } from 'axios';

import { packApi } from 'api';
import { statusCode } from 'enum';
import { setPacks, setErrorMessage } from 'store/actions';
import { AppThunkType } from 'types';

export const getPacksTC =
  (
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: string,
    pageCount?: number,
    page?: number,
    userId?: string,
  ): AppThunkType =>
  async dispatch => {
    try {
      const { status, data } = await packApi.getPacks(
        packName,
        min,
        max,
        sortPacks,
        pageCount,
        page,
        userId,
      );

      if (status === statusCode.OK) {
        dispatch(setPacks(data));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    }
  };
