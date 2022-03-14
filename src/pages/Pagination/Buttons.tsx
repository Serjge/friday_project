import { FC, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import style from './Pagination.module.css';

import { SuperButton } from 'components';
import { ButtonsPagination } from 'enum';
import { selectCardPacksTotalCount } from 'store/selectors';

type ButtonsPropsType = {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (currentPage: number) => void;
};

export const Buttons: FC<ButtonsPropsType> = ({
  setCurrentPage,
  currentPage,
  pagesCount,
}): ReactElement => {
  const cardPacksTotalCount = useSelector(selectCardPacksTotalCount);
  const { one, two, four, three } = ButtonsPagination;

  let buttons = [];
  const lastPage = Math.ceil(cardPacksTotalCount / pagesCount);

  for (let i = 1; i <= lastPage; i += one)
    buttons.push(
      <SuperButton
        key={i}
        style={{ background: currentPage === i ? 'aqua' : undefined }}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </SuperButton>,
    );

  // 1 ... 4 5 (6) 7 8 ... 11
  if (currentPage + two < lastPage) {
    buttons[currentPage + two] = (
      <span className={style.points} key={currentPage + three}>
        {' ... '}
      </span>
    );
    buttons = buttons.filter((p, i) => i < currentPage + three || i === lastPage - one);
  }
  if (currentPage > four) {
    buttons[one] = (
      <span className={style.points} key={two}>
        {' ... '}
      </span>
    );
    buttons = buttons.filter((p, i) => i < two || i > currentPage - four);
  }

  return <div className={style.generalBlock}>{buttons}</div>;
};
