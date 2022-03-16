import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DebounceSearchField, TableCardsPack, Pagination } from 'components';
import { CountDecksOnPage } from 'enum';
import { setCurrentPagePacksAC, setPageCountPacksAC, setSearchPack } from 'store/actions';
import {
  selectCurrentPage,
  selectPageCount,
  selectSearchPack,
  selectSortPacks,
} from 'store/selectors';
import { getPacksTC } from 'store/thunks';
import { getNumberValuesFromEnum } from 'utils';

export const PacksList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);
  const searchPack = useSelector(selectSearchPack);
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  const searchByPacks = useCallback((pack: string): void => {
    dispatch(setSearchPack(pack));
  }, []);

  const setCurrentPage = (value: number): void => {
    dispatch(setCurrentPagePacksAC(value));
  };

  const setPacksCount = (value: number): void => {
    dispatch(setPageCountPacksAC(value));
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getPacksTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks, searchPack, pagesCount, currentPage]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DebounceSearchField searchValue={searchByPacks} />
      <TableCardsPack />

      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        countDecksOnPage={countDecksOnPage}
        setCurrentPage={setCurrentPage}
        setPacksCount={setPacksCount}
      />
    </div>
  );
});
