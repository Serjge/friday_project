import { memo, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SearchPackCard, TableCardsPack } from 'components';
import { Pagination } from 'pages/Pagination/Pagination';
import {
  selectCurrentPage,
  selectPageCount,
  selectSearchPack,
  selectSortPacks,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const PacksList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);
  const searchPack = useSelector(selectSearchPack);
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks, searchPack, pagesCount, currentPage]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchPackCard />
      <TableCardsPack />
      <Pagination />
    </div>
  );
});
