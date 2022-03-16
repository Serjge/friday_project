import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableHead } from './style';

import { CardItem } from 'components';
import { setSortCard } from 'store/actions';
import { selectPackCards, selectSortCard } from 'store/selectors';

export const TableCards = (): ReactElement => {
  const dispatch = useDispatch();

  const cards = useSelector(selectPackCards);

  const sortPacks = useSelector(selectSortCard);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSortCard(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSortCard(`1${sortType}`));
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
          overflowY: 'auto',
          width: '900px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TableHead width="300px" onClick={() => onSortClick('question')}>
            Question
          </TableHead>
          <TableHead width="300px" onClick={() => onSortClick('answer')}>
            Answer
          </TableHead>
          <TableHead width="100px" onClick={() => onSortClick('updated')}>
            Last Updated
          </TableHead>
          <TableHead width="100px" onClick={() => onSortClick('grade')}>
            Grade
          </TableHead>
        </div>
        {mapCardsPack}
      </div>
    </div>
  );
};
