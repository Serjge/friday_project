import { memo, ReactElement, useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Modal, SuperButton } from 'components';
import { deleteCardTC } from 'store/thunks';
import { WrapperModal } from 'styles';

export const DeleteCard = memo(({ cardId }: { cardId: string }): ReactElement => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState<boolean>(false);

  const onDeleteCardClick = useCallback((): void => {
    dispatch(deleteCardTC(cardId));
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
          <h3>Delete card?</h3>
          <div>
            <SuperButton onClick={onCloseModalClick}>Cancel</SuperButton>
            <SuperButton onClick={onDeleteCardClick}>Delete</SuperButton>
          </div>
        </WrapperModal>
      </Modal>
      <SuperButton size="small" onClick={onOpenModalClick}>
        Delete
      </SuperButton>
    </>
  );
});
