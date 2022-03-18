import { FC, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import style from 'components/Pagination/Pagination.module.css';
import { SuperButton } from 'components/UI';
import { ButtonsPagination } from 'enum';
import { selectCardPacksTotalCount } from 'store/selectors';
import { ButtonsPropsType } from 'types';

export const Buttons: FC<ButtonsPropsType> = ({
  setCurrentPage,
  currentPage,
  pagesCount,
}): ReactElement => {
  const cardPacksTotalCount = useSelector(selectCardPacksTotalCount);

  const { one, two, four, three } = ButtonsPagination;
  const lastPage = Math.ceil(cardPacksTotalCount / pagesCount);
  let buttons = [];

  for (let index = 1; index <= lastPage; index += one) {
    buttons.push(
      <SuperButton
        key={index}
        style={{ background: currentPage === index ? 'aqua' : undefined }}
        onClick={() => setCurrentPage(index)}
      >
        {index}
      </SuperButton>,
    );
  }

  // 1 ... 10 11 (12) 13 14 ... 100
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
    buttons = buttons.filter((button, i) => i < two || i > currentPage - four);
  }

  return <div className={style.generalBlock}>{buttons}</div>;
};