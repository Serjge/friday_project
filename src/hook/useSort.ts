import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootReducerType } from 'store';

export const useSort = (
  action: (sort: string) => any,
  select: (state: RootReducerType) => string,
): ((sortType: string) => void) => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(select);

  return useCallback(
    (sortType: string): void => {
      if (sortPacks === `1${sortType}`) {
        dispatch(action(`0${sortType}`));
      } else {
        dispatch(action(`1${sortType}`));
      }
    },
    [sortPacks],
  );
};
