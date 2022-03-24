import { memo, ReactElement, useCallback, useRef } from 'react';

import { useDispatch } from 'react-redux';

import { Modal, SuperButton, TextField } from 'components';
import { useModal } from 'hook';
import { addPackTC } from 'store/thunks';
import { WrapperModal } from 'styles';

export const AddPack = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { isActiveModal, openModal, closeModal } = useModal();

  const titleRef = useRef<HTMLInputElement>(null);

  const setNewPack = useCallback((): void => {
    dispatch(addPackTC(titleRef.current!.value));
    closeModal();
    titleRef.current!.value = '';
  }, []);

  return (
    <>
      <Modal isActive={isActiveModal} changeIsActive={closeModal}>
        <WrapperModal>
          <h3>Add new pack</h3>
          <div>
            <TextField labelTitle="Title pack" width="250px" ref={titleRef} />
          </div>
          <div>
            <SuperButton onClick={openModal}>Cancel</SuperButton>
            <SuperButton onClick={setNewPack}>Add</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <SuperButton onClick={openModal}>Add Pack</SuperButton>
    </>
  );
});
