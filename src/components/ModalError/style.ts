import styled from 'styled-components';

type ModalErrorWrapperPropsType = {
  hiddenError: boolean;
};

export const ModalErrorWrapper = styled.div<ModalErrorWrapperPropsType>`
  padding-left: 20px;
  position: fixed;
  width: 400px;
  height: 60px;
  z-index: 20;
  bottom: ${({ hiddenError }) => (hiddenError ? '30px' : '-130px')};
  left: calc(50vw - 150px);
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme: { errorColor } }) => errorColor};
  transition: all 1s ease;
  border-radius: 2px;
`;

export const ButtonCloseModal = styled.span`
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
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
  border: 2px solid ${({ theme: { mainColor } }) => mainColor};
  box-shadow: inset 0 0 0 0 ${({ theme: { mainColor } }) => mainColor};

  margin: 15px;
  padding: 5px 5px;
  font-size: 12px;

  &:hover {
    color: ${({ theme: { fontColor } }) => fontColor};
    box-shadow: inset 0 -100px 0 0 ${({ theme: { mainColor } }) => mainColor};
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
