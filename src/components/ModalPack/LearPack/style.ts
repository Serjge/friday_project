import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  font-size: 25px;
`;

export const Text = styled.div`
  border-bottom: ${({ theme }) => theme.mainColor} 1px solid;
  padding: 20px;
  text-align: start;
  height: auto;
  width: 100%;
`;
