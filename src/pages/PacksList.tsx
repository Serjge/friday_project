import React, { memo, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { SuperButton } from 'components';
import { RootReducerType } from 'store';
import { setSort } from 'store/actions';
import { selectCards, selectSortPacks } from 'store/selectors';
import {
  selectCardsCount,
  selectPackName,
  selectUpdateDataPack,
  selectUserNamePack,
} from 'store/selectors/selectCards';
import { getCardsTC } from 'store/thunks';

const TableHead = styled.div`
  padding: 10px;
  display: flex;
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
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '670px' }}>
        <TableHead onClick={() => onSortClick('name')}>Name</TableHead>
        <TableHead onClick={() => onSortClick('cardsCount')}>Cards</TableHead>
        <TableHead onClick={() => onSortClick('updated')}>Last Updated</TableHead>
        <TableHead onClick={() => onSortClick('user_name')}>Creat by</TableHead>
        <TableHead>Action</TableHead>
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
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '670px' }}>
      <TableHead>{namePack}</TableHead>
      <TableHead>{cardsCount}</TableHead>
      <TableHead>{dataNew.toLocaleDateString()}</TableHead>
      <TableHead>{userNamePack}</TableHead>
      <TableHead>
        <SuperButton>Delete</SuperButton>
        <SuperButton>Edit</SuperButton>
        <SuperButton>Learn</SuperButton>
      </TableHead>
    </div>
  );
});
