import { ChangeEvent, FC, ReactElement } from 'react';

import { Buttons } from './Buttons';
import style from './Pagination.module.css';

export type PaginationPropsType = {
  currentPage: number;
  pagesCount: number;
  countDecksOnPage: number[];
  totalCount: number;
  setCurrentPage: (pageNumber: number) => void;
  setPacksCount: (countPack: number) => void;
};

export const Pagination: FC<PaginationPropsType> = ({
  currentPage,
  pagesCount,
  setPacksCount,
  setCurrentPage,
  totalCount,
  countDecksOnPage,
}): ReactElement => {
  const setPageCount = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPacksCount(Number(e.currentTarget.value));
  };

  return (
    <div className={style.generalBlock}>
      {'Count decks on page '}
      <select value={pagesCount} onChange={setPageCount}>
        {/* OptionComponent */}
        {countDecksOnPage.map(op => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      <Buttons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesCount={pagesCount}
        totalCount={totalCount}
      />
    </div>
  );
};
