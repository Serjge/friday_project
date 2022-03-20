import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { useSort } from 'hook';
import { selectSortPacks } from 'store/selectors';
import { Flex, TableHeadWithSorts } from 'styles';

export const HeadTablePacks = memo((): ReactElement => {
  const sortPacks = useSelector(selectSortPacks);

  const onSortClick = useSort();

  return (
    <Flex justifyContent="center">
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="name"
        width="30%"
        onClick={() => onSortClick('name')}
      >
        Name
      </TableHeadWithSorts>
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="cardsCount"
        width="10%"
        onClick={() => onSortClick('cardsCount')}
      >
        Cards
      </TableHeadWithSorts>
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="updated"
        width="10%"
        onClick={() => onSortClick('updated')}
      >
        Last Updated
      </TableHeadWithSorts>
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="user_name"
        width="30%"
        onClick={() => onSortClick('user_name')}
      >
        Creat by
      </TableHeadWithSorts>
      <TableHeadWithSorts width="20%">Action</TableHeadWithSorts>
    </Flex>
  );
});
