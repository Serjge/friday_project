import React, { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { useSort } from 'hook';
import { rerenderCardAC, setSortCardsAC } from 'store/actions';
import { selectSortCard } from 'store/selectors';
import { Flex, TableHeadWithSorts } from 'styles';

export const HeadTableCards = memo(
  ({ isMyPack }: { isMyPack: boolean }): ReactElement => {
    const sortPacks = useSelector(selectSortCard);

    const onSortCardsClick = useSort(setSortCardsAC, rerenderCardAC, selectSortCard);

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
    ];

    const mapTableHead = tableHeadData.map(
      ({ name, flexBasis, sortType, flexBasisIsMyPack }) => (
        <TableHeadWithSorts
          key={name + flexBasis}
          sortPack={sortPacks}
          sortType={sortType}
          flexBasis={isMyPack ? flexBasisIsMyPack : flexBasis}
          onClick={() => onSortCardsClick(sortType)}
        >
          {name}
        </TableHeadWithSorts>
      ),
    );

    if (!isMyPack) {
      return <Flex justifyContent="center">{mapTableHead}</Flex>;
    }

    return (
      <Flex justifyContent="center">
        {mapTableHead}
        <TableHeadWithSorts flexBasis="10%">Action</TableHeadWithSorts>
      </Flex>
    );
  },
);
