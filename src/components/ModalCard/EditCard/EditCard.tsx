import { memo, ReactElement, useCallback, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, SuperButton, TextField } from 'components';
import { RootReducerType } from 'store';
import { selectAnswer, selectQuestion } from 'store/selectors';
import { updateCardTC } from 'store/thunks';
import { WrapperModal } from 'styles';

export const EditCard = memo(({ cardId }: { cardId: string }): ReactElement => {
  const dispatch = useDispatch();

  const answer = useSelector((state: RootReducerType) => selectAnswer(state, cardId));
  const question = useSelector((state: RootReducerType) => selectQuestion(state, cardId));

  const newAnswer = useRef<HTMLInputElement>(null);
  const newQuestion = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onUpdateCardClick = useCallback((): void => {
    dispatch(
      updateCardTC(cardId, {
        question: newQuestion.current!.value,
        answer: newAnswer.current!.value,
      }),
    );
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
            <SuperButton onClick={onCloseModalClick}>Cancel</SuperButton>
            <SuperButton onClick={onUpdateCardClick}>Add</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <SuperButton size="small" onClick={onOpenModalClick}>
        edit
      </SuperButton>
    </>
  );
});
