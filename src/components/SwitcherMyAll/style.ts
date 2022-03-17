import styled from 'styled-components';

type SwitcherBoxPropsType = {
  isActive: boolean;
  side: 'left' | 'right';
};

export const SwitcherBox = styled.div<SwitcherBoxPropsType>`
  background-color: ${({ isActive }) => (isActive ? '#4676d7' : '#1d49aa')};
  font-weight: 600;
  line-height: 14px;
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: default;
  border-radius: ${({ side }) => (side === 'left' ? '5px 0 0 5px' : '0 5px 5px 0')};
`;

export const WrapperSwitcher = styled.div`
  border: 0;
  border-radius: 5px;
  display: flex;
`;
