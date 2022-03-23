import styled from 'styled-components';

type ModalErrorWrapperPropsType = {
  hiddenError: boolean;
};

export const ModalErrorWrapper = styled.div<ModalErrorWrapperPropsType>`
  padding-left: 20px;
  position: fixed;
  width: 400px;
  height: 100px;
  z-index: 20;
  bottom: ${({ hiddenError }) => (hiddenError ? '30px' : '-130px')};
  left: calc(50vw - 150px);
  display: flex;
  justify-content: space-between;
  background-color: darkred;
  transition: all 1s ease;
  border-radius: 5px;
`;

export const ButtonCloseModal = styled.span`
  margin-top: 10px;
  margin-right: 10px;
  cursor: default;
  padding: 5px;
  border-radius: 2px;
  background-color: #4676d7;

  &:hover {
    background: #8daee5;
  }

  &:active {
    background: #1d49aa;
  }
`;
