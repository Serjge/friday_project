import { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableHead } from 'components/TableCardsPack/style';
import { setSortPacks } from 'store/actions';
import { selectSortPacks } from 'store/selectors';
import { Flex, SortingDirection } from 'styles';

export const HeadTablePacks = memo((): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSortPacks(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSortPacks(`1${sortType}`));
    }
  };

  return (
    <Flex justifyContent="center">
      <TableHead width="200px" onClick={() => onSortClick('name')}>
        Name
        <SortingDirection sortPack={sortPacks} sortType="name" />
      </TableHead>
      <TableHead width="50px" onClick={() => onSortClick('cardsCount')}>
        Cards
        <SortingDirection sortPack={sortPacks} sortType="cardsCount" />
      </TableHead>
      <TableHead width="100px" onClick={() => onSortClick('updated')}>
        Last Updated
        <SortingDirection sortPack={sortPacks} sortType="updated" />
      </TableHead>
      <TableHead width="200px" onClick={() => onSortClick('user_name')}>
        Creat by
        <SortingDirection sortPack={sortPacks} sortType="user_name" />
      </TableHead>
      <TableHead width="180px">Action</TableHead>
    </Flex>
  );
});
