import { packApi } from 'api';
import { StatusCode } from 'enum';
import { setPacksAC } from 'store/actions';
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
import { handleError } from 'utils';

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

      if (status === StatusCode.Success) {
        dispatch(setPacksAC(data));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };
