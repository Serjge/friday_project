import React, { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { useSort } from 'hook';
import { rerenderCardAC, setSortCardsAC } from 'store/actions';
import { selectSortCard } from 'store/selectors';
import { Flex, TableHeadWithSorts } from 'styles';

const TABLE_HEAD_DATA = [
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

export const HeadTableCards = memo(
  ({ isMyPack }: { isMyPack: boolean }): ReactElement => {
    const sortPacks = useSelector(selectSortCard);

    const onSortCardsClick = useSort(setSortCardsAC, rerenderCardAC, selectSortCard);

    const tableHead = TABLE_HEAD_DATA.map(
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
      return <Flex justifyContent="center">{tableHead}</Flex>;
    }

    return (
      <Flex justifyContent="center">
        {tableHead}
        <TableHeadWithSorts flexBasis="10%">Action</TableHeadWithSorts>
      </Flex>
    );
  },
);
