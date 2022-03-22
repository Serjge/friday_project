import { ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './AddPack.module.css';

import { Modal } from 'components';
import { SuperButton, TextField } from 'components/UI';
import { setResultMessageAddPackAC } from 'store/actions';
import { selectResultMessage } from 'store/selectors';
import { addPackTC } from 'store/thunks';

export const AddPack = (): ReactElement => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const newTitle = 'new title from EPIC TEAM'; // hard code

  const resultMessage = useSelector(selectResultMessage);

  const setNewPack = (): void => {
    dispatch(addPackTC(newTitle));
  };

  const setIsAddMod = (): void => {
    setIsActive(false);
    dispatch(setResultMessageAddPackAC(''));
  };

  return (
    <div>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div className={style.form}>
          <h3>ADD NEW PACK</h3>
          <div className={style.input}>
            <h4>New title</h4>
            {/* add width TextField */}
            <TextField defaultValue={newTitle} />
          </div>
          <div className={style.message}>{resultMessage}</div>
          <div>
            <SuperButton onClick={setIsAddMod}>Cancel</SuperButton>
            <SuperButton onClick={setNewPack}>Add</SuperButton>
          </div>
        </div>
      </Modal>
      <SuperButton onClick={() => setIsActive(true)}>Add Pack</SuperButton>
    </div>
  );
};
