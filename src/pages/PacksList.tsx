import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableCardsPack } from 'components';
import { selectCurrentPage, selectPageCount, selectSortPacks } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const PacksList = (): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC('', 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks]);

  return <TableCardsPack />;
};
