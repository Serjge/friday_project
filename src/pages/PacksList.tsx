import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Pagination, SearchField, TableCardsPack } from 'components';
import { CountDecksOnPage } from 'enum';
import { setCurrentPageAC, setPageCountAC, setSearchPack } from 'store/actions';
import {
  selectCurrentPage,
  selectPageCount,
  selectSearchPack,
  selectSortPacks,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';
import { getNumberValuesFromEnum } from 'utils';

export const PacksList = (): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);
  const searchPack = useSelector(selectSearchPack);
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  const searchValue = (value: string): void => {
    dispatch(setSearchPack(value));
  };

  const setCurrentPage = (value: number): void => {
    dispatch(setCurrentPageAC(value));
  };

  const setPacksCount = (value: number): void => {
    dispatch(setPageCountAC(value));
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks, searchPack, pagesCount, currentPage]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchField searchValue={searchValue} />
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
};
