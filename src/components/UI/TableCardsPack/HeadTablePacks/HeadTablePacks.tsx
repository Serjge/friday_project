import { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableHead } from 'components/UI/TableCardsPack/style';
import { setSort } from 'store/actions';
import { selectSortPacks } from 'store/selectors';

export const HeadTablePacks = memo((): ReactElement => {
  const dispatch = useDispatch();
  const sortPacks = useSelector(selectSortPacks);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSort(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSort(`1${sortType}`));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableHead width="200px" onClick={() => onSortClick('name')}>
        Name
      </TableHead>
      <TableHead width="50px" onClick={() => onSortClick('cardsCount')}>
        Cards
      </TableHead>
      <TableHead width="100px" onClick={() => onSortClick('updated')}>
        Last Updated
      </TableHead>
      <TableHead width="200px" onClick={() => onSortClick('user_name')}>
        Creat by
      </TableHead>
      <TableHead width="180px">Action</TableHead>
    </div>
  );
});
