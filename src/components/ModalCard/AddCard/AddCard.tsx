import { memo, ReactElement, useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, SuperButton, TextField } from 'components';
import { useModal } from 'hook';
import { selectPackUserId, selectUserId } from 'store/selectors';
import { addCardTC } from 'store/thunks';
import { WrapperModal } from 'styles';

export const AddCard = memo(
  ({ packId }: { packId: undefined | string }): ReactElement => {
    const dispatch = useDispatch();

    const { isActiveModal, openModal, closeModal } = useModal();

    const userId = useSelector(selectUserId);
    const packUserId = useSelector(selectPackUserId);

    const answer = useRef<HTMLInputElement>(null);
    const question = useRef<HTMLInputElement>(null);

    const onAddCardClick = useCallback((): void => {
      if (packId) {
        dispatch(addCardTC(packId, question.current!.value, answer.current!.value));
      }
      question.current!.value = '';
      answer.current!.value = '';
      closeModal();
    }, []);

    return (
      <>
        <Modal isActive={isActiveModal} changeIsActive={closeModal}>
          <WrapperModal>
            <h3>Add new card.</h3>
            <div>
              <TextField labelTitle="Question" width="200px" ref={question} />
              <TextField labelTitle="Answer" width="200px" ref={answer} />
            </div>
            <div>
              <SuperButton onClick={closeModal}>Cancel</SuperButton>
              <SuperButton onClick={onAddCardClick}>Add</SuperButton>
            </div>
          </WrapperModal>
        </Modal>
        <SuperButton hidden={userId !== packUserId} onClick={openModal}>
          Add Card
        </SuperButton>
      </>
    );
  },
);
