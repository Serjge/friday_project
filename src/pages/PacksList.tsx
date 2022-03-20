import { memo, ReactElement, useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  AddPack,
  DebounceSearchField,
  Pagination,
  SwitcherMyAll,
  TableCardsPack,
} from 'components';
import { MultiRangeSlider } from 'components/DoubleRange/MultiRangeSlider';
import { CountDecksOnPage } from 'enum';
import {
  // seMaxCardsCountLocalAC,
  // seMinCardsCountLocalAC,
  setCurrentPagePacksAC,
  setPageCountPacksAC,
  setSearchPack,
} from 'store/actions';
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
  let minRange = useSelector(selectMinCardsCount);
  let maxRange = useSelector(selectMaxCardsCount);
  // const minRangeLocal = useSelector(selectMinCardsCountLocal);
  // const maxRangeLocal = useSelector(selectMaxCardsCountLocal);

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

  const [minRV, setMinRV] = useState(minRange);
  const [maxRV, setMaxRV] = useState(maxRange);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(
      getPacksTC(searchPack, minRV, maxRV, sortPacks, pagesCount, currentPage, userId),
    );
  }, [sortPacks, searchPack, pagesCount, currentPage, userId, rerender, minRV, maxRV]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  const changeRange = (min: number, max: number): void => {
    setMinRV(min);
    setMaxRV(max);
    // dispatch(seMinCardsCountAC(min));
    // dispatch(seMaxCardsCountAC(max));
    // dispatch(rerenderPackAC()); // т.е. сетаются сначала значения, а потом вызывается юзЭффект выше, из-за вызова этой функции
    console.log(max, min);
  };

  if (minRange === undefined) {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    minRange = 0;
  }
  if (maxRange === undefined) {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    maxRange = 100;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <MultiRangeSlider min={minRange} max={maxRange} onChange={changeRange} />
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
