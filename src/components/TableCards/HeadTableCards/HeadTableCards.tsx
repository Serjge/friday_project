import React, { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { useSort } from 'hook';
import { setSortCards } from 'store/actions';
import { selectSortCard } from 'store/selectors';
import { Flex, TableHeadWithSorts } from 'styles';

export const HeadTableCards = memo(
  ({ isMyPack }: { isMyPack: boolean }): ReactElement => {
    const sortPacks = useSelector(selectSortCard);

    const onSortClick = useSort(setSortCards, selectSortCard);

    const TableHeadData = [
      {
        name: 'Question',
        sortType: 'question',
        flexBasis: '40%',
        flexBasisIsMyPack: '35%',
      },
      {
        name: 'Answer',
        sortType: 'answer',
        flexBasis: '40%',
        flexBasisIsMyPack: '35%',
      },
      {
        name: 'Last Updated',
        sortType: 'updated',
        flexBasis: '10%',
        flexBasisIsMyPack: '10%',
      },
      {
        name: 'Grade',
        sortType: 'grade',
        flexBasis: '10%',
        flexBasisIsMyPack: '10%',
      },
      {
        name: 'Action',
        sortType: '',
        flexBasis: '0%',
        flexBasisIsMyPack: '10%',
      },
    ];

    if (!isMyPack) {
      TableHeadData.pop();
    }

    return (
      <Flex justifyContent="center">
        {TableHeadData.map(({ name, flexBasis, sortType, flexBasisIsMyPack }) => (
          <TableHeadWithSorts
            key={name + flexBasis}
            sortPack={sortPacks}
            sortType={sortType}
            flexBasis={isMyPack ? flexBasisIsMyPack : flexBasis}
            onClick={() => onSortClick(sortType)}
          >
            {name}
          </TableHeadWithSorts>
        ))}
      </Flex>
    );
  },
);
