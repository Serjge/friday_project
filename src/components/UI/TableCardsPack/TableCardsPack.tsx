import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableHead } from './style';

import { PackItem } from 'components';
import { setSort } from 'store/actions';
import { selectCards, selectSortPacks } from 'store/selectors';

export const TableCardsPack = (): ReactElement => {
  const dispatch = useDispatch();

  const cards = useSelector(selectCards);
  const sortPacks = useSelector(selectSortPacks);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSort(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSort(`1${sortType}`));
    }
  };

  const mapCardsPack = cards && cards.map(({ _id }) => <PackItem id={_id} key={_id} />);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '500px',
          overflow: 'auto',
          overflowY: 'scroll',
          width: '750px',
        }}
      >
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
        {mapCardsPack}
      </div>
    </div>
  );
};
