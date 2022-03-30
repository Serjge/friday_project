import styled from 'styled-components';

const OPACITY_1 = 1;
const OPACITY_0 = 0;

export const MainBlock = styled.div<{ isActive: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isActive }) => (isActive ? OPACITY_1 : OPACITY_0)};
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  transition: 0.5s;
`;

const SCALE_ACTIVE = 1;
const SCALE_NOT_ACTIVE = 0.5;

export const ContentBlock = styled.div<{ isActive: boolean }>`
  min-width: 300px;
  max-width: 500px;
  min-height: 200px;
  background-color: #202c3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 10px;
  transition: 0.4s all;
  transform: scale(${({ isActive }) => (isActive ? SCALE_ACTIVE : SCALE_NOT_ACTIVE)});
`;
