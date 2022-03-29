import { FC, memo, ReactElement, useCallback } from 'react';

import { Buttons } from './Buttons';
import { MainBlock, Title } from './style';

import { Select } from 'components';

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
      (value: number): void => {
        setPacksCount(value);
      },
      [setPacksCount],
    );

    return (
      <MainBlock>
        <Title>Count decks on page: </Title>
        <Select
          currentCount={pagesCount}
          handleCurrentCount={setPageCount}
          counts={countDecksOnPage}
        />
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
