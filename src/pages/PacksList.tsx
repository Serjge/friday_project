import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DebounceSearchField, TableCardsPack } from 'components';
import { Pagination } from 'pages/Pagination/Pagination';
import { setSearchPack } from 'store/actions';
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

  const searchByPacks = useCallback((pack: string): void => {
    dispatch(setSearchPack(pack));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks, searchPack, pagesCount, currentPage]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DebounceSearchField searchValue={searchByPacks} />
      <TableCardsPack />
      <Pagination />
    </div>
  );
});
