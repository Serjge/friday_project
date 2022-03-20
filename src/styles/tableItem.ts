import styled from 'styled-components';

type TableItemPropsType = {
  width?: string;
  flexBasis?: string;
  cursorPointer?: boolean;
};
export const TableItem = styled.div<TableItemPropsType>`
  cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : '')};
  padding: 10px;
  display: flex;
  width: ${({ width }) => width};
  flex-basis: ${({ flexBasis }) => flexBasis};
`;
