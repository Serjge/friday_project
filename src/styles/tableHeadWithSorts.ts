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
  background: ${({ theme: { tableHeadColor } }) => tableHeadColor};
  &::after {
    content: '';
    width: 0;
    height: 0;
    margin-left: 10px;

    border-bottom: ${({ sortType, sortPack }) =>
      sortPack === `1${sortType}` ? '13px solid grey' : ''};

    border-top: ${({ sortType, sortPack }) =>
      sortPack === `0${sortType}` ? '13px solid grey' : ''};

    border-right: 9px solid transparent;
  }
`;
