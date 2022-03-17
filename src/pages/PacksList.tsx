import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  SwitcherMyAll,
  DebounceSearchField,
  TableCardsPack,
  Pagination,
  AddPack,
} from 'components';
import { CountDecksOnPage } from 'enum';
import { setCurrentPagePacksAC, setPageCountPacksAC, setSearchPack } from 'store/actions';
import {
  selectCurrentPage,
  selectIsMyPack,
  selectPageCount,
  selectSearchPack,
  selectSortPacks,
  selectUserId,
} from 'store/selectors';
import { getPacksTC } from 'store/thunks';
import { getNumberValuesFromEnum } from 'utils';

export const PacksList = memo((): ReactElement => {
  const dispatch = useDispatch();

  let userId = useSelector(selectUserId);
  const isMyPack = useSelector(selectIsMyPack);
  const sortPacks = useSelector(selectSortPacks);
  const pagesCount = useSelector(selectPageCount);
  const searchPack = useSelector(selectSearchPack);
  const currentPage = useSelector(selectCurrentPage);

  const searchByPacks = useCallback((pack: string): void => {
    dispatch(setSearchPack(pack));
  }, []);

  const setCurrentPage = (value: number): void => {
    dispatch(setCurrentPagePacksAC(value));
  };

  const setPacksCount = (value: number): void => {
    dispatch(setPageCountPacksAC(value));
  };

  if (!isMyPack) {
    userId = '';
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getPacksTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage, userId));
  }, [sortPacks, searchPack, pagesCount, currentPage, userId]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DebounceSearchField searchValue={searchByPacks} />
      <SwitcherMyAll />
      <AddPack />
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
