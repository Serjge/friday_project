import React, { ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ButtonCloseModal, ModalErrorWrapper } from './style';

import { ModalErrorTimer } from 'enum';
import { useDebounce } from 'hook';
import { setErrorMessageAC } from 'store/actions';
import { selectErrorMessage } from 'store/selectors';
import { Flex } from 'styles';

export const ModalError = (): ReactElement => {
  const dispatch = useDispatch();

  const error = useSelector(selectErrorMessage);
  const [isError, setIsError] = useState(false);

  const CloseModal = (): void => {
    setIsError(false);

    setTimeout(() => {
      dispatch(setErrorMessageAC(null));
    }, ModalErrorTimer.DELETE_ERROR_DELAY);
  };

  const deb = useDebounce(CloseModal, ModalErrorTimer.AUTO_HIDE_DURATION_DELAY);

  useEffect(() => {
    if (error !== null) {
      setIsError(true);
      deb(error);
    }
  }, [error]);

  return (
    <ModalErrorWrapper hiddenError={isError}>
      <Flex alignItems="center">{error}</Flex>
      <Flex alignSelf="self-start">
        <ButtonCloseModal role="presentation" onClick={CloseModal}>
          X
        </ButtonCloseModal>
      </Flex>
    </ModalErrorWrapper>
  );
};
