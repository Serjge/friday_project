import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PackListWrapper } from './style';

import {
  AddPack,
  DebounceSearchField,
  Pagination,
  SwitcherMyAll,
  TableCardsPack,
} from 'components';
import { MultiRangeSlider } from 'components/DoubleRange/MultiRangeSlider';
import { CountDecksOnPage } from 'enum';
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
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
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
  }, [sortPacks, searchPack, pagesCount, currentPage, userId, rerender]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  const changeRange = (min: number, max: number): void => {
    // dispatch(seMinCardsCountAC(min));
    // dispatch(seMaxCardsCountAC(max));
    // dispatch(rerenderPackAC()); // т.е. сетаются сначала значения, а потом вызывается юзЭффект выше, из-за вызова этой функции
    console.log(max, min);
  };

  return (
    <PackListWrapper>
      <DebounceSearchField placeholder="Name" searchValue={searchByPacks} />
      <div style={{ display: 'flex' }}>
        <MultiRangeSlider min={0} max={100} onChange={changeRange} />
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
