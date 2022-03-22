import { memo, ReactElement, useCallback, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, SuperButton, TextField } from 'components';
import { selectPackUserId, selectUserId } from 'store/selectors';
import { addCardTC } from 'store/thunks';
import { WrapperModal } from 'styles';

export const AddCard = memo(
  ({ packId }: { packId: undefined | string }): ReactElement => {
    const dispatch = useDispatch();

    const userId = useSelector(selectUserId);
    const packUserId = useSelector(selectPackUserId);

    const answer = useRef<HTMLInputElement>(null);
    const question = useRef<HTMLInputElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    const onAddCardClick = useCallback((): void => {
      if (packId) {
        dispatch(addCardTC(packId, question.current!.value, answer.current!.value));
      }
      setIsActive(false);
    }, []);

    const onCloseModalClick = useCallback((): void => {
      setIsActive(false);
    }, []);

    const onOpenModalClick = (): void => {
      setIsActive(true);
    };

    return (
      <>
        <Modal isActive={isActive} changeIsActive={setIsActive}>
          <WrapperModal>
            <h3>Add new card.</h3>
            <TextField labelTitle="Question" width="200px" ref={question} />
            <TextField labelTitle="Answer" width="200px" ref={answer} />
            <div>
              <SuperButton onClick={onCloseModalClick}>Cancel</SuperButton>
              <SuperButton onClick={onAddCardClick}>Add</SuperButton>
            </div>
          </WrapperModal>
        </Modal>
        <SuperButton hidden={userId !== packUserId} onClick={onOpenModalClick}>
          Add Card
        </SuperButton>
      </>
    );
  },
);
