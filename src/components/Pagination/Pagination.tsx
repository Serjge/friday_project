import { ChangeEvent, FC, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Buttons } from './Buttons';
import style from './Pagination.module.css';

import { CountDecksOnPage } from 'enum';
import {
  selectCurrentPage,
  selectMaxCardsCount,
  selectMinCardsCount,
  selectPageCount,
  selectSortPacks,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const Pagination: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const minCardsCount = useSelector(selectMinCardsCount);
  const maxCardsCount = useSelector(selectMaxCardsCount);
  const sortPacks = useSelector(selectSortPacks);
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  const setCurrentPage = (
    newCurrentPage: number,
    newPageCount: number = pagesCount,
  ): void => {
    dispatch(
      getCardsTC(
        '',
        minCardsCount, // заглушка на будущее, чтобы не зануляло
        maxCardsCount, // заглушка на будущее, чтобы не зануляло
        sortPacks, // заглушка на будущее, чтобы не зануляло
        newPageCount,
        newCurrentPage,
      ),
    );
  };

  const setPageCount = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentPage(currentPage, Number(e.currentTarget.value));
  };

  const { ten, twenty, five, fourty } = CountDecksOnPage;

  return (
    <div className={style.generalBlock}>
      {'Count decks on page '}
      <select value={pagesCount} onChange={setPageCount}>
        <option value={five}>{five}</option>
        <option value={ten}>{ten}</option>
        <option value={twenty}>{twenty}</option>
        <option value={fourty}>{fourty}</option>
      </select>
      <Buttons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesCount={pagesCount}
      />
    </div>
  );
};
