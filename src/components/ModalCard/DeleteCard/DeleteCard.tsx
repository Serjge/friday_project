import { memo, ReactElement, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Modal, SuperButton } from 'components';
import { useModal } from 'hook';
import { deleteCardTC } from 'store/thunks';
import { WrapperModal } from 'styles';

export const DeleteCard = memo(({ cardId }: { cardId: string }): ReactElement => {
  const dispatch = useDispatch();

  const { isActiveModal, openModal, closeModal } = useModal();

  const onDeleteCardClick = useCallback((): void => {
    dispatch(deleteCardTC(cardId));
    closeModal();
  }, []);

  return (
    <>
      <Modal isActive={isActiveModal} changeIsActive={closeModal}>
        <WrapperModal height="200px">
          <h3>Do you want to delete this card?</h3>
          <div>
            <SuperButton onClick={closeModal}>No</SuperButton>
            <SuperButton onClick={onDeleteCardClick}>Yes</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <SuperButton size="small" onClick={openModal}>
        Delete
      </SuperButton>
    </>
  );
});
