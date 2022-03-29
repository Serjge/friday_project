import styled from 'styled-components';

export const SelectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border: #13d7a1 solid 2px;
  background-color: rgb(40, 44, 52);
  margin: 0 5px 5px;

  &:hover {
    box-shadow: rgb(60, 255, 228) 0 0 10px;
  }
`;

const OPACITY_IS_ACTIVE = 1;
const OPACITY_IS_NOT_ACTIVE = 0;

export const Items = styled.div<{ isActive: boolean }>`
  margin: -140px 5px 5px 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
  height: auto;
  border: #13d7a1 solid 2px;
  background-color: rgb(40, 44, 52);
  opacity: ${({ isActive }) => (isActive ? OPACITY_IS_ACTIVE : OPACITY_IS_NOT_ACTIVE)};
`;

export const Item = styled.div<{ isCurrentCount: boolean }>`
  display: flex;
  justify-content: center;
  background-color: ${({ isCurrentCount }) => isCurrentCount && '#13d7a1'};
  width: 100%;
  height: 30px;

  &:hover {
    background-color: #13d7a1;
    box-shadow: rgb(60, 255, 228) 0 0 10px;
  }
`;
