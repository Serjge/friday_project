import styled from 'styled-components';

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 60vh;
  min-width: 25vw;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme }) => theme.mainColor} 1px solid;
  padding: 5%;
`;
