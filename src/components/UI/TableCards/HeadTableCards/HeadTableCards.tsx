import React, { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableHead } from 'components/UI/TableCards/style';
import { setSortCard } from 'store/actions';
import { selectSortCard } from 'store/selectors';

export const HeadTableCards = memo((): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortCard);

  const onSortClick = (sortType: string): void => {
    if (sortPacks === `1${sortType}`) {
      dispatch(setSortCard(`0${sortType}`));
    }
    if (sortPacks !== `1${sortType}`) {
      dispatch(setSortCard(`1${sortType}`));
    }
  };
  return (
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
  );
});
