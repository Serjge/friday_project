import { memo, ReactElement, useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, SuperButton, TextField } from 'components';
import { useModal } from 'hook';
import { RootReducerType } from 'store';
import { selectAnswer, selectQuestion } from 'store/selectors';
import { updateCardTC } from 'store/thunks';
import { WrapperModal } from 'styles';

type EditCardPropsType = {
  cardId: string;
};

export const EditCard = memo(({ cardId }: EditCardPropsType): ReactElement => {
  const dispatch = useDispatch();

  const { isActiveModal, openModal, closeModal } = useModal();

  const answer = useSelector((state: RootReducerType) => selectAnswer(state, cardId));
  const question = useSelector((state: RootReducerType) => selectQuestion(state, cardId));

  const newAnswer = useRef<HTMLInputElement>(null);
  const newQuestion = useRef<HTMLInputElement>(null);

  const onUpdateCardClick = useCallback((): void => {
    dispatch(
      updateCardTC(cardId, {
        question: newQuestion.current!.value,
        answer: newAnswer.current!.value,
      }),
    );
    closeModal();
  }, []);

  return (
    <>
      <Modal isActive={isActiveModal} changeIsActive={closeModal}>
        <WrapperModal>
          <h3>Update card.</h3>
          <div>
            <TextField
              defaultValue={question}
              labelTitle="Question"
              width="200px"
              ref={newQuestion}
            />
            <TextField
              defaultValue={answer}
              labelTitle="Answer"
              width="200px"
              ref={newAnswer}
            />
          </div>
          <div>
            <SuperButton onClick={closeModal}>Cancel</SuperButton>
            <SuperButton onClick={onUpdateCardClick}>Add</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <SuperButton size="small" onClick={openModal}>
        Edit
      </SuperButton>
    </>
  );
});
