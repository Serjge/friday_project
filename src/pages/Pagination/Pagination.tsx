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
  selectCurrentPage, selectMaxCardsCount, selectMinCardsCount, selectPackName,
  selectPageCount
} from "../../store/selectors";
import {SuperButton} from "../../components";
import {Buttons} from "./Buttons";


export const Pagination: FC = (): ReactElement => {

  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage)
  const pagesCount = useSelector(selectPageCount)
  const minCardsCount = useSelector(selectMinCardsCount)
  const maxCardsCount = useSelector(selectMaxCardsCount)

  const setCurrentPage = (currentPage: number, newPageCount: number = pagesCount) => {
    dispatch(getCardsTC('', minCardsCount, maxCardsCount, '', newPageCount, currentPage))
  };

  const setPageCount = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(currentPage, Number(e.currentTarget.value))
  }

  return (
    <div className={style.generalBlock}>
      <select value={pagesCount} onChange={setPageCount}>
        <option value={4}>4</option>
        <option value={7}>7</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <Buttons setCurrentPage={setCurrentPage}/>
    </div>
  );
};
