import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootReducerType } from 'store';
import { AllAppActionsType } from 'store/actions';

export const useSort = (
  action: (sort: string) => AllAppActionsType,
  rerenderAction: () => AllAppActionsType,
  select: (state: RootReducerType) => string,
): ((sortType: string) => void) => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(select);

  return useCallback(
    (sortType: string): void => {
      if (sortPacks === `1${sortType}`) {
        dispatch(action(`0${sortType}`));
        dispatch(rerenderAction());
      } else {
        dispatch(action(`1${sortType}`));
        dispatch(rerenderAction());
      }
    },
    [sortPacks],
  );
};
