import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

type HeaderButtonPropsType = {
  isActive?: boolean;
};

export const HeaderButton = styled.div<HeaderButtonPropsType>`
  margin: 15px 0;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  appearance: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  text-align: center;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${({ theme: { mainColor } }) => mainColor};
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border-bottom: ${({ isActive, theme: { mainColor } }) =>
    isActive ? `3px solid ${mainColor}` : '0px'};

  &:hover {
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme: { borderColor } }) => borderColor};
  }
`;
