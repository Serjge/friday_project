import styled from 'styled-components';

type PropsType = {
  width?: string;
};

export const TableItem = styled.div<PropsType>`
  padding: 10px;
  display: flex;
  width: ${({ width }) => width};
`;
