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
        <WrapperModal>
          <h3>Delete card?</h3>
          <div>
            <SuperButton onClick={closeModal}>Cancel</SuperButton>
            <SuperButton onClick={onDeleteCardClick}>Delete</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <SuperButton size="small" onClick={openModal}>
        Delete
      </SuperButton>
    </>
  );
});
