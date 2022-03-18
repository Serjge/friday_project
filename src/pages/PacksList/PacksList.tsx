import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PackListWrapper } from './style';

import {
  AddPack,
  DebounceSearchField,
  Pagination,
  SwitcherMyAll,
  TableCardsPack,
} from 'components';
import { CountDecksOnPage, PATH } from 'enum';
import { setCurrentPagePacksAC, setPageCountPacksAC, setSearchPack } from 'store/actions';
import {
  selectCurrentPage,
  selectIsLogin,
  selectIsMyPack,
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
  const isLogin = useSelector(selectIsLogin);
  const isMyPack = useSelector(selectIsMyPack);
  const sortPacks = useSelector(selectSortPacks);
  const pagesCount = useSelector(selectPageCount);
  const searchPack = useSelector(selectSearchPack);
  const currentPage = useSelector(selectCurrentPage);
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
    dispatch(getPacksTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage, userId));
  }, [sortPacks, searchPack, pagesCount, currentPage, userId, rerender]);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  if (!isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <PackListWrapper>
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
