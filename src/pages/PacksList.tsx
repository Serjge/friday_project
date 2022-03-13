import { memo, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { SuperButton } from 'components';
import { RootReducerType } from 'store';
import { setSort } from 'store/actions';
import {
  selectCards,
  selectCardsCount,
  selectPackName,
  selectSortPacks,
  selectUpdateDataPack,
  selectUserNamePack,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';

type PropsType = {
  width?: string;
};

const TableHead = styled.div<PropsType>`
  padding: 10px;
  display: flex;
  width: ${({ width }) => width};
`;

export const PacksList = (): ReactElement => {
  const dispatch = useDispatch();

  const cards = useSelector(selectCards);
  const sortPacks = useSelector(selectSortPacks);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC('', 0, 0, sortPacks));
  }, [sortPacks]);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSort(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSort(`1${sortType}`));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      {cards && cards.map(({ _id }) => <Pack id={_id} key={_id} />)}
    </div>
  );
};

export const Pack = memo(({ id }: { id: string }) => {
  const namePack = useSelector((state: RootReducerType) => selectPackName(state, id));
  const cardsCount = useSelector((state: RootReducerType) => selectCardsCount(state, id));
  const userNamePack = useSelector((state: RootReducerType) =>
    selectUserNamePack(state, id),
  );
  const updateDataPack = useSelector((state: RootReducerType) =>
    selectUpdateDataPack(state, id),
  );
  const dataNew = new Date(updateDataPack);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableHead width="200px">{namePack}</TableHead>
      <TableHead width="50px">{cardsCount}</TableHead>
      <TableHead width="100px">{dataNew.toLocaleDateString()}</TableHead>
      <TableHead width="200px">{userNamePack}</TableHead>
      <TableHead width="180px">
        <SuperButton size="small">Delete</SuperButton>
        <SuperButton size="small">Edit</SuperButton>
        <SuperButton size="small">Learn</SuperButton>
      </TableHead>
    </div>
  );
});
