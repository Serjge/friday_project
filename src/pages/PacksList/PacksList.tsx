import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PackListWrapper } from './style';

import {
  AddPack,
  DebounceSearchField,
  MultiRangeSlider,
  Pagination,
  SwitcherMyAll,
  TableCardsPack,
} from 'components';
import { CountDecksOnPage, TimerForDeBounce } from 'enum';
import { useDebounce } from 'hook';
import { setCurrentPagePacksAC, setPageCountPacksAC, setSearchPack } from 'store/actions';
import {
  selectCurrentPage,
  selectIsMyPack,
  selectMaxCardsCount,
  selectMinCardsCount,
  selectPageCount,
  selectRerender,
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
  const minRange = useSelector(selectMinCardsCount);
  const maxRange = useSelector(selectMaxCardsCount);

  // rerender
  const rerender = useSelector(selectRerender);

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
    dispatch(
      getPacksTC(
        searchPack,
        minRange,
        maxRange,
        sortPacks,
        pagesCount,
        currentPage,
        userId,
      ),
    );
  }, [
    sortPacks,
    searchPack,
    pagesCount,
    currentPage,
    userId,
    minRange,
    maxRange,
    rerender,
  ]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  const changeRange = (data: { minVal: number; maxVal: number }): void => {
    console.log(data);
  };

  const rangeAPI = useDebounce(changeRange, TimerForDeBounce.RANGE_DELAY);

  return (
    <PackListWrapper>
      <MultiRangeSlider min={0} max={100} onChange={rangeAPI} />
      <DebounceSearchField placeholder="Name" searchValue={searchByPacks} />
      <div style={{ display: 'flex' }}>
        <SwitcherMyAll />
        <AddPack />
      </div>

      <TableCardsPack />

      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        countDecksOnPage={countDecksOnPage}
        setCurrentPage={setCurrentPage}
        setPacksCount={setPacksCount}
      />
    </PackListWrapper>
  );
});
