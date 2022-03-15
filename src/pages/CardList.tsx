import { ChangeEvent, memo, ReactElement, useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { TextField } from 'components';
import { TableCards } from 'components/UI/TableCards';
import { useDebounce } from 'hook/useDebounce';
import { setErrorMessage } from 'store/actions';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const [value, setValue] = useState('');

  const search = (qwe: string): void => {
    console.log(qwe);
    dispatch(setErrorMessage(''));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    // dispatch(getCardsTC(qwe, 0, 0, sortPacks, pagesCount, currentPage));
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
    console.log(qwe);
  };

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const debounceSearch2 = useDebounce(search2, 1500);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField value={value} onChange={onChange} />
      <TextField
        ref={valueRef}
        onEnter={() => debounceSearch2(valueRef.current!.value)}
      />
      <TableCards />
    </div>
  );
});
