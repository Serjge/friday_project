import styled from 'styled-components';

type WrapperModalPropsType = {
  height?: string;
};

export const WrapperModal = styled.div<WrapperModalPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: ${({ height }) => height || '300px'};
  margin: 0 auto;
  background-color: rgb(7, 20, 28);
`;
