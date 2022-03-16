import { memo, ReactElement, useCallback, useRef } from 'react';

import { AddPack, SuperButton, TextField } from 'components';

type SearchFieldPropsType = {
  searchValue: (value: string) => void;
};

export const SearchField = memo(({ searchValue }: SearchFieldPropsType): ReactElement => {
  const valueRef = useRef<HTMLInputElement>(null);

  const onSearchClick = useCallback((): void => {
    const { value } = valueRef.current!;

    if (value.trim() !== '') {
      searchValue(value.trim());
    }
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <TextField ref={valueRef} />
      <SuperButton onClick={onSearchClick}>Search</SuperButton>
      <AddPack />
    </div>
  );
});
