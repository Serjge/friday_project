import React, { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableHead } from 'components/UI/TableCards/style';
import { setSortCards } from 'store/actions';
import { selectSortCard } from 'store/selectors';

export const HeadTableCards = memo(
  ({ isMyPack }: { isMyPack: boolean }): ReactElement => {
    const dispatch = useDispatch();

    const sortPacks = useSelector(selectSortCard);

    const onSortClick = (sortType: string): void => {
      if (sortPacks === `1${sortType}`) {
        dispatch(setSortCards(`0${sortType}`));
      }
      if (sortPacks !== `1${sortType}`) {
        dispatch(setSortCards(`1${sortType}`));
      }
    };

    if (isMyPack) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TableHead width="35%" onClick={() => onSortClick('question')}>
            Question
          </TableHead>
          <TableHead width="35%" onClick={() => onSortClick('answer')}>
            Answer
          </TableHead>
          <TableHead width="10%" onClick={() => onSortClick('updated')}>
            Last Updated
          </TableHead>
          <TableHead width="10%" onClick={() => onSortClick('grade')}>
            Grade
          </TableHead>
          <TableHead width="10%">Action</TableHead>
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TableHead width="40%" onClick={() => onSortClick('question')}>
          Question
        </TableHead>
        <TableHead width="40%" onClick={() => onSortClick('answer')}>
          Answer
        </TableHead>
        <TableHead width="10%" onClick={() => onSortClick('updated')}>
          Last Updated
        </TableHead>
        <TableHead width="10%" onClick={() => onSortClick('grade')}>
          Grade
        </TableHead>
      </div>
    );
  },
);
