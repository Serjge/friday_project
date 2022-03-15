import { ReactElement, useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import { TextField } from 'components';
import { SEARCH_DELAY } from 'const';
import { useDebounce } from 'hook/useDebounce';
import { setSearchPack } from 'store/actions';

export const SearchPackCard = (): ReactElement => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const search = useCallback(
    (searchValue: string): void => {
      dispatch(setSearchPack(searchValue));
    },
    [setSearchPack],
  );

  const debounceSearch = useDebounce(search, SEARCH_DELAY);

  const onChange = useCallback(
    (text: string): void => {
      setValue(text);
      debounceSearch(text);
    },
    [setValue, debounceSearch],
  );
  return (
    <div>
      <TextField value={value} onChangeText={onChange} />
    </div>
  );
};
