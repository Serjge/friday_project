import { ChangeEvent, FC, ReactElement } from 'react';

import { Buttons } from './Buttons';
import style from './Pagination.module.css';

import { CountDecksOnPage } from 'enum';

export type PaginationPropsType = {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (pageNumber: number) => void;
  setPacksCount: (countPack: number) => void;
};

export const Pagination: FC<PaginationPropsType> = ({
  currentPage,
  pagesCount,
  setPacksCount,
  setCurrentPage,
}): ReactElement => {
  const setPageCount = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPacksCount(Number(e.currentTarget.value));
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
