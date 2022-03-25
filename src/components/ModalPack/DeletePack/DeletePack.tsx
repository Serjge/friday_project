import { FC, memo, ReactElement, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Modal, SuperButton } from 'components';
import { useModal } from 'hook';
import { deletePackTC } from 'store/thunks';
import { WrapperModal } from 'styles';

type DeletePackPropsType = {
  hiddenEditPackButton: boolean;
  packId: string;
};

export const DeletePack: FC<DeletePackPropsType> = memo(
  ({ packId, hiddenEditPackButton }): ReactElement => {
    const dispatch = useDispatch();

    const { isActiveModal, openModal, closeModal } = useModal();

    const deletePack = useCallback((): void => {
      dispatch(deletePackTC(packId));
      closeModal();
    }, []);

    return (
      <>
        <Modal isActive={isActiveModal} changeIsActive={closeModal}>
          <WrapperModal height="200px">
            <h3>Do you want to delete this pack?</h3>
            <div>
              <SuperButton onClick={closeModal}>No</SuperButton>
              <SuperButton onClick={deletePack}>Yes</SuperButton>
            </div>
          </WrapperModal>
        </Modal>
        <SuperButton size="small" hidden={hiddenEditPackButton} onClick={openModal}>
          Delete
        </SuperButton>
      </>
    );
  },
);
