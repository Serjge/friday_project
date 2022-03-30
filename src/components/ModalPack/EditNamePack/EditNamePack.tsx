import { FC, ReactElement, useCallback, useRef } from 'react';

import { useDispatch } from 'react-redux';

import { Modal } from 'components';
import { SuperButton, TextField } from 'components/UI';
import { useModal } from 'hook';
import { PenIcon } from 'icon';
import { editTitlePackTC } from 'store/thunks';
import { WrapperModal } from 'styles';

type EditNamePackPropsType = {
  namePack: string;
  packId: string;
};

export const EditNamePack: FC<EditNamePackPropsType> = ({
  namePack,
  packId,
}): ReactElement => {
  const dispatch = useDispatch();

  const { isActiveModal, openModal, closeModal } = useModal();
  const titleRef = useRef<HTMLInputElement>(null);

  const editNamePack = useCallback((): void => {
    dispatch(editTitlePackTC(packId, titleRef.current!.value));
    closeModal();
  }, []);

  return (
    <div>
      <Modal isActive={isActiveModal} changeIsActive={closeModal}>
        <WrapperModal>
          <h3>EDIT NAME PACK</h3>
          <TextField
            ref={titleRef}
            labelTitle="New title"
            width="200px"
            defaultValue={namePack}
          />
          <div>
            <SuperButton onClick={closeModal}>Cancel</SuperButton>
            <SuperButton onClick={editNamePack}>Edit</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <div onClick={openModal} role="presentation">
        <PenIcon />
      </div>
    </div>
  );
};
