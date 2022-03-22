import { AxiosError } from 'axios';

import { packApi } from 'api';
import { statusCode } from 'enum';
import { setErrorMessageAC, setPacksAC } from 'store/actions';
import {
  selectCurrentPage,
  selectIsMyPack,
  selectLocalMaxCardsCount,
  selectLocalMinCardsCount,
  selectPageCount,
  selectSearchPack,
  selectSortPacks,
  selectUserId,
} from 'store/selectors';
import { RootReducerType } from 'store/store';
import { AppThunkType } from 'types';

export const getPacksTC =
  (): AppThunkType => async (dispatch, getState: () => RootReducerType) => {
    try {
      const isMyPack = selectIsMyPack(getState());
      const sortPacks = selectSortPacks(getState());
      const searchPack = selectSearchPack(getState());
      const minRangeLocal = selectLocalMinCardsCount(getState());
      const maxRangeLocal = selectLocalMaxCardsCount(getState());
      const pagesCount = selectPageCount(getState());
      const currentPage = selectCurrentPage(getState());
      let userId = selectUserId(getState());

      if (!isMyPack) {
        userId = '';
      }

      const { status, data } = await packApi.getPacks(
        searchPack,
        minRangeLocal,
        maxRangeLocal,
        sortPacks,
        pagesCount,
        currentPage,
        userId,
      );

      if (status === statusCode.OK) {
        dispatch(setPacksAC(data));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    }
  };
