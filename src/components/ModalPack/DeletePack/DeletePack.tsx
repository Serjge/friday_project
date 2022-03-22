import { FC, ReactElement, useState } from 'react';

import style from './DeletePack.module.css';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';

type DeletePackPropsType = {
  hiddenEditPackButton: boolean;
  onDeletePackClick: () => void;
};

export const DeletePack: FC<DeletePackPropsType> = ({
  onDeletePackClick,
  hiddenEditPackButton,
}): ReactElement => {
  const [isActive, setIsActive] = useState(false);

  const deletePack = (): void => {
    onDeletePackClick();
    setIsActive(false);
  };

  return (
    <div>
      <SuperButton
        size="small"
        hidden={hiddenEditPackButton}
        onClick={() => setIsActive(true)}
      >
        Delete
      </SuperButton>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div className={style.main}>
          <h3>Do you want to delete this pack ?</h3>
          <div>
            <SuperButton onClick={() => setIsActive(false)}>No</SuperButton>
            <SuperButton onClick={deletePack}>Yes</SuperButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};
