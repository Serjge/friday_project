import styled from 'styled-components';

type TableHeadWithSortsPropsType = {
  width?: string;
  sortType?: string;
  sortPack?: string;
  flexBasis?: string;
};

export const TableHeadWithSorts = styled.div<TableHeadWithSortsPropsType>`
  padding: 10px;
  display: flex;
  flex-basis: ${({ flexBasis }) => flexBasis};
  width: ${({ width }) => width};
  cursor: ${({ sortType }) => (sortType ? 'pointer' : '')};
  position: relative;

  &::after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    margin-left: 10px;

    border-bottom: ${({ sortType, sortPack }) =>
      sortPack === `1${sortType}` ? '13px solid grey' : ''};
    border-top: ${({ sortType, sortPack }) =>
      sortPack === `0${sortType}` ? '13px solid grey' : ''};
    border-right: 13px solid transparent;
  }
`;
