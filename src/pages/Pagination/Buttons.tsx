/* eslint-disable */
import {
  CSSProperties,
  FC,
  MouseEventHandler,
  MouseEvent,
  ReactElement,
  ReactNode,
  useState, ChangeEventHandler, ChangeEvent
} from 'react';

import style from './Pagination.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store";
import {getCardsTC} from "../../store/thunks";
import {
  selectCardPacksTotalCount,
  selectCurrentPage, selectPackName,
  selectPageCount
} from "../../store/selectors";
import {SuperButton} from "../../components";

type ButtonsPropsType = {
  setCurrentPage : (currentPage: number, newPageCount?: number ) => void
}

export const Buttons: FC<ButtonsPropsType> = ({setCurrentPage}): ReactElement => {

  const currentPage = useSelector(selectCurrentPage)
  const pagesCount = useSelector(selectPageCount)
  const cardPacksTotalCount = useSelector(selectCardPacksTotalCount)

  let pages = [];
  const lastPage = Math.ceil(cardPacksTotalCount / pagesCount);

  for (let i = 1; i <= lastPage; i++) pages.push((
    <SuperButton
      key={i}
      style={{background: currentPage === i ? 'aqua' : undefined}}
      onClick={() => setCurrentPage(i)}
    >
      {i}</SuperButton>

  ));

  // 1 ... 4 5 (6) 7 8 ... 11
  if ((currentPage + 2) < lastPage) {
    pages[currentPage + 2] = (
      <span className={style.points} key={currentPage + 3}> ... </span>
    );
    pages = pages.filter((p, i) => i < (currentPage + 3) || i === (lastPage - 1));
  }
  if (currentPage > 4) {
    pages[1] = (
      <span className={style.points} key={2}> ... </span>
    );
    pages = pages.filter((p, i) => i < 2 || i > currentPage - 4);
  }

  return (
    <div className={style.generalBlock}>
      {pages}
    </div>
  );
};
