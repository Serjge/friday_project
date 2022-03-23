import { FC, memo, ReactElement } from 'react';

import style from 'components/Pagination/Pagination.module.css';
import { SuperButton } from 'components/UI';
import { ButtonsPagination } from 'enum';
import { ButtonsPropsType } from 'types';

export const Buttons: FC<ButtonsPropsType> = memo(
  ({ setCurrentPage, currentPage, pagesCount, totalCount }): ReactElement => {
    const { One, Two, Four, Three } = ButtonsPagination;
    const lastPage = Math.ceil(totalCount / pagesCount);
    let buttons = [];

    for (let index = 1; index <= lastPage; index += One) {
      buttons.push(
        <SuperButton
          key={index}
          size="small"
          style={{ background: currentPage === index ? 'aqua' : undefined }}
          onClick={() => setCurrentPage(index)}
        >
          {index}
        </SuperButton>,
      );
    }

    // 1 ... 10 11 (12) 13 14 ... 100
    if (currentPage + Two < lastPage) {
      buttons[currentPage + Two] = (
        <span className={style.points} key={currentPage + Three}>
          {' ... '}
        </span>
      );
      buttons = buttons.filter((p, i) => i < currentPage + Three || i === lastPage - One);
    }
    if (currentPage > Four) {
      buttons[One] = (
        <span className={style.points} key={Two}>
          {' ... '}
        </span>
      );
      buttons = buttons.filter((button, i) => i < Two || i > currentPage - Four);
    }

    return <div className={style.generalBlock}>{buttons}</div>;
  },
);
