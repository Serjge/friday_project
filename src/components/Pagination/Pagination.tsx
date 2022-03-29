import { ChangeEvent, FC, memo, ReactElement, useCallback } from 'react';

import { Buttons } from './Buttons';
import { MainBlock, Title } from './style';

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

    const selectElements = countDecksOnPage.map(count => (
      <option key={count} value={count}>
        {count}
      </option>
    ));

    return (
      <MainBlock>
        <Title>Count decks on page </Title>
        <select value={pagesCount} onChange={setPageCount}>
          {selectElements}
        </select>
        <Buttons
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pagesCount={pagesCount}
          totalCount={totalCount}
        />
      </MainBlock>
    );
  },
);
