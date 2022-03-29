import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { useSort } from 'hook';
import { rerenderPackAC, setSortPacksAC } from 'store/actions';
import { selectSortPacks } from 'store/selectors';
import { Flex, TableHeadWithSorts } from 'styles';

const tableHeadData = [
  {
    name: 'Name',
    sortType: 'name',
    flexBasis: '30%',
  },
  {
    name: 'Cards',
    sortType: 'cardsCount',
    flexBasis: '10%',
  },
  {
    name: 'Last Updated',
    sortType: 'updated',
    flexBasis: '10%',
  },
  {
    name: 'Creat by',
    sortType: 'user_name',
    flexBasis: '30%',
  },
  {
    name: 'Action',
    sortType: '',
    flexBasis: '20%',
  },
];

export const HeadTablePacks = memo((): ReactElement => {
  const sortPacks = useSelector(selectSortPacks);

  const onSortPacksClick = useSort(setSortPacksAC, rerenderPackAC, selectSortPacks);

  const mapTableHead = tableHeadData.map(({ name, flexBasis, sortType }) => (
    <TableHeadWithSorts
      key={name + flexBasis}
      sortPack={sortPacks}
      sortType={sortType}
      flexBasis={flexBasis}
      onClick={() => onSortPacksClick(sortType)}
    >
      {name}
    </TableHeadWithSorts>
  ));

  return <Flex justifyContent="center">{mapTableHead}</Flex>;
});
