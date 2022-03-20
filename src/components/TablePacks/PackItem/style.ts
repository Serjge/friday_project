import styled from 'styled-components';

type PropsType = {
  width?: string;
  flexBasis?: string;
  cursorPointer?: boolean;
};

export const TableItem = styled.div<PropsType>`
  cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : '')};
  padding: 10px;
  display: flex;
  width: ${({ width }) => width};
  flex-basis: ${({ flexBasis }) => flexBasis};
`;
