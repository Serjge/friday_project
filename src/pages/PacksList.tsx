import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableCardsPack } from 'components';
import { selectSortPacks } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const PacksList = (): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC('', 0, 0, sortPacks));
  }, [sortPacks]);

  return <TableCardsPack />;
};
