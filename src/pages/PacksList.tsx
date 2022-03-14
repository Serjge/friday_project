import { ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableCardsPack } from 'components';
import { SearchField } from 'components/UI/SearchField/SearchField';
import { selectSortPacks } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const PacksList = (): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);
  const [valueInput, setValueInput] = useState('');

  const searchValue = (value: string): void => {
    setValueInput(value);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC('', 0, 0, sortPacks));
  }, [sortPacks]);

  return (
    <>
      <SearchField searchValue={searchValue} />
      <TableCardsPack />
      {valueInput}
    </>
  );
};
