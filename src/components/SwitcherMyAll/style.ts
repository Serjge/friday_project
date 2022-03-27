import styled from 'styled-components';

type SwitcherBoxPropsType = {
  isActive: boolean;
  side: 'left' | 'right';
};

export const SwitcherBox = styled.div<SwitcherBoxPropsType>`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 2px;
  position: relative;
  display: inline-block;

  text-align: center;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${({ isActive, theme: { mainColor, fontColor } }) =>
    isActive ? mainColor : fontColor};
  background: ${({ isActive, theme: { mainColor } }) =>
    isActive ? 'transparent' : mainColor};
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid ${({ theme: { mainColor } }) => mainColor};
  box-shadow: inset 0 0 0 0 ${({ theme: { mainColor } }) => mainColor};

  &:hover {
    color: ${({ theme: { fontColor } }) => fontColor};
    box-shadow: inset 0 -100px 0 0 ${({ theme: { mainColor } }) => mainColor};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const WrapperSwitcher = styled.div`
  border: 0;
  border-radius: 5px;
  display: flex;
`;
