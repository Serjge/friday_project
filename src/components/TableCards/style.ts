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

export const WrapperTableCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  overflow-y: auto;
  width: 80vw;
`;
