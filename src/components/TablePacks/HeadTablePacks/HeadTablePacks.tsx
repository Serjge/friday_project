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
        flexBasis="30%"
        onClick={() => onSortClick('name')}
      >
        Name
      </TableHeadWithSorts>
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="cardsCount"
        flexBasis="10%"
        onClick={() => onSortClick('cardsCount')}
      >
        Cards
      </TableHeadWithSorts>
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="updated"
        flexBasis="10%"
        onClick={() => onSortClick('updated')}
      >
        Last Updated
      </TableHeadWithSorts>
      <TableHeadWithSorts
        sortPack={sortPacks}
        sortType="user_name"
        flexBasis="30%"
        onClick={() => onSortClick('user_name')}
      >
        Creat by
      </TableHeadWithSorts>
      <TableHeadWithSorts flexBasis="20%">Action</TableHeadWithSorts>
    </Flex>
  );
});
