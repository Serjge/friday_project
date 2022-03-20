import React, { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { useSort } from 'hook';
import { rerenderCardAC, setSortCards } from 'store/actions';
import { selectSortCard } from 'store/selectors';
import { Flex, TableHeadWithSorts } from 'styles';

export const HeadTableCards = memo(
  ({ isMyPack }: { isMyPack: boolean }): ReactElement => {
    const sortPacks = useSelector(selectSortCard);

    const onSortCardsClick = useSort(setSortCards, rerenderCardAC, selectSortCard);

    const tableHeadData = [
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
      tableHeadData.pop();
    }

    return (
      <Flex justifyContent="center">
        {tableHeadData.map(({ name, flexBasis, sortType, flexBasisIsMyPack }) => (
          <TableHeadWithSorts
            key={name + flexBasis}
            sortPack={sortPacks}
            sortType={sortType}
            flexBasis={isMyPack ? flexBasisIsMyPack : flexBasis}
            onClick={() => onSortCardsClick(sortType)}
          >
            {name}
          </TableHeadWithSorts>
        ))}
      </Flex>
    );
  },
);
