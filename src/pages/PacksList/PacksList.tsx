import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  AddPack,
  DebounceSearchField,
  Pagination,
  SwitcherMyAll,
  TablePacks,
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
import { Flex } from 'styles';
import { getNumberValuesFromEnum } from 'utils';

export const PacksList = memo((): ReactElement => {
  const dispatch = useDispatch();

  let userId = useSelector(selectUserId);
  const isLogin = useSelector(selectIsLogin);
  const isMyPack = useSelector(selectIsMyPack);
  const rerender = useSelector(selectRerender);
  const sortPacks = useSelector(selectSortPacks);
  const pagesCount = useSelector(selectPageCount);
  const searchPack = useSelector(selectSearchPack);
  const currentPage = useSelector(selectCurrentPage);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  const searchByPacks = useCallback((pack: string): void => {
    dispatch(setSearchPack(pack));
  }, []);

  const setCurrentPage = useCallback((value: number): void => {
    dispatch(setCurrentPagePacksAC(value));
  }, []);

  const setPacksCount = useCallback((value: number): void => {
    dispatch(setPageCountPacksAC(value));
  }, []);

  if (!isMyPack) {
    userId = '';
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getPacksTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage, userId));
  }, [sortPacks, searchPack, pagesCount, currentPage, userId, rerender]);

  if (!isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <DebounceSearchField placeholder="Name" searchValue={searchByPacks} />
      <Flex>
        <SwitcherMyAll />
        <AddPack />
      </Flex>
      <TablePacks />
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        countDecksOnPage={countDecksOnPage}
        setCurrentPage={setCurrentPage}
        setPacksCount={setPacksCount}
      />
    </Flex>
  );
});
