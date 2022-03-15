import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Pagination } from '../../../pages/Pagination/Pagination';

import { CardItem } from './CardItem';
import { TableHead } from './style';

import { setSort } from 'store/actions';
import { selectSortPacks } from 'store/selectors';

export const TableCards = (): ReactElement => {
  const dispatch = useDispatch();

  const cards = [{ _id: '1' }, { _id: '2' }, { _id: '3' }];
  const sortPacks = useSelector(selectSortPacks);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSort(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSort(`1${sortType}`));
    }
  };

  const mapCardsPack = cards && cards.map(({ _id }) => <CardItem id={_id} key={_id} />);

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
            Question
          </TableHead>
          <TableHead width="50px" onClick={() => onSortClick('cardsCount')}>
            Answer
          </TableHead>
          <TableHead width="100px" onClick={() => onSortClick('updated')}>
            Last Updated
          </TableHead>
          <TableHead width="200px" onClick={() => onSortClick('user_name')}>
            Grade
          </TableHead>
        </div>
        {mapCardsPack}
      </div>
    </div>
  );
};
