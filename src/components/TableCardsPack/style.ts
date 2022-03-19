import styled from 'styled-components';

type PropsType = {
  width?: string;
};

export const TableHead = styled.div<PropsType>`
  padding: 10px;
  display: flex;
  width: ${({ width }) => width};
  cursor: pointer;
`;

export const WrapperTable = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 750px;
  overflow-y: auto;
  margin-top: 50px;
`;
