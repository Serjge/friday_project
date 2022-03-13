/* eslint-disable */
import { CSSProperties, FC, ReactElement, ReactNode, useState } from 'react';

import style from './Pagination.module.css';

type IPaginationProps = {
  page: number;
  pageCount: number;
  productTotalCount: number;
  getPage: (newPage: number, newPageCount: number) => void;
  // title?: ReactNode;
  paginationStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  selectStyle?: CSSProperties;
}

let Data: IPaginationProps = {

  page: 1,
  pageCount: 1,
  productTotalCount: 100,
  getPage: () => {
  },

};
const getPage = (newPage: number, newPageCount: number) => {
  Data.page = newPage;
  Data.pageCount = newPageCount;
};

let { page, pageCount, productTotalCount, paginationStyle, buttonStyle, selectStyle } = Data;

export const Pagination: FC = (): ReactElement => {
  let pages = [];
  const lastPage = Math.ceil(productTotalCount / pageCount);

  for (let i = 1; i <= lastPage; i++) pages.push((
    <button
      key={i}
      style={{ background: page === i ? 'aqua' : undefined, ...buttonStyle }}
      onClick={() => getPage(i, pageCount)}
    >
      {i}
    </button>
  ));

  // 1 ... 4 5 (6) 7 8 ... 11
  if ((page + 4) < lastPage) {
    pages[page + 2] = (
      <span key={page + 3} style={buttonStyle}>
                - ... -
            </span>
    );
    pages = pages.filter((p, i) => i < (page + 3) || i === (lastPage - 1));
  }
  if (page > 5) {
    pages[1] = (
      <span key={2} style={buttonStyle}>
                - ... -
            </span>
    );
    pages = pages.filter((p, i) => i < 2 || i > page - 4);
  }

  return (
    <div className={style.generalBlock} style={{ margin: '0 10px', minHeight: '50px' }}>
      {/*{title}*/}

      <select value={pageCount} onChange={e => getPage(page, Number(e.currentTarget.value))}>
        <option value={4}>4</option>
        <option value={7}>7</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      {pages}
    </div>
  );
};
