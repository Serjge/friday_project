import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSortPacks } from 'store/actions';
import { selectSortPacks } from 'store/selectors';

export const useSort = (): ((sortType: string) => void) => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);

  return useCallback(
    (sortType: string): void => {
      if (sortPacks === `1${sortType}`) {
        dispatch(setSortPacks(`0${sortType}`));
      } else {
        dispatch(setSortPacks(`1${sortType}`));
      }
    },
    [sortPacks],
  );
};
