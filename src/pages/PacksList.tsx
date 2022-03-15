import { ChangeEvent, memo, ReactElement, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableCardsPack, SearchField, TextField } from 'components';
import { useDebounce } from 'hook/useDebounce';
import { setSearchPack } from 'store/actions';
import {
  selectCurrentPage,
  selectPageCount,
  selectSortPacks,
  selectSearchPack,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const PacksList = memo((): ReactElement => {
  const dispatch = useDispatch();
  console.log('render');
  const sortPacks = useSelector(selectSortPacks);
  const searchPack = useSelector(selectSearchPack);

  const searchValue = (value: string): void => {
    dispatch(setSearchPack(value));
  };
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks, searchPack]);

  const [value, setValue] = useState('');

  const search = (qwe: string): void => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(qwe, 0, 0, sortPacks, pagesCount, currentPage));
    // dispatch(setSearchPack(qwe));
  };

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const debounceSearch = useDebounce(search, 1500);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    debounceSearch(e.target.value);
  };

  const valueRef = useRef<HTMLInputElement>(null);

  const search2 = (qwe: string): void => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(qwe, 0, 0, sortPacks, pagesCount, currentPage));
  };

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const debounceSearch2 = useDebounce(search2, 1500);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchField searchValue={searchValue} />

      <TextField value={value} onChange={onChange} />
      <TextField
        ref={valueRef}
        onEnter={() => debounceSearch2(valueRef.current!.value)}
      />
      <TableCardsPack />
    </div>
  );
});
