import { ChangeEvent, FC, memo, ReactElement, useCallback } from 'react';

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

export const Pagination: FC<PaginationPropsType> = memo(
  ({
    currentPage,
    pagesCount,
    setPacksCount,
    setCurrentPage,
    totalCount,
    countDecksOnPage,
  }): ReactElement => {
    const setPageCount = useCallback(
      (e: ChangeEvent<HTMLSelectElement>): void => {
        setPacksCount(Number(e.currentTarget.value));
      },
      [setPacksCount],
    );

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
  },
);
