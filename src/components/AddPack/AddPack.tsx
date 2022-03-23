import { memo, ReactElement, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './AddPack.module.css';

import { Modal } from 'components/Modal/Modal';
import { SuperButton, SuperInputText } from 'components/UI';
import { setResultMessageAddPackAC } from 'store/actions';
import { selectResultMessage } from 'store/selectors';
import { addPackTC } from 'store/thunks';

export const AddPack = memo((): ReactElement => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const newTitle = 'new title from EPIC TEAM'; // hard code

  const resultMessage = useSelector(selectResultMessage);

  const setNewPack = useCallback((): void => {
    dispatch(addPackTC(newTitle));
  }, []);

  const setIsAddMod = useCallback((): void => {
    setIsActive(false);
    dispatch(setResultMessageAddPackAC(''));
  }, []);

  const addPack = useCallback((): void => {
    setIsActive(true);
  }, []);

  return (
    <div>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div className={style.form}>
          <span className={style.title}>ADD NEW PACK</span>
          <div className={style.input}>
            <span>New title</span>
            <SuperInputText defaultValue={newTitle} />
          </div>
          <div className={style.message}>{resultMessage}</div>
          <div>
            <SuperButton onClick={setIsAddMod}>Cancel</SuperButton>
            <SuperButton onClick={setNewPack}>Add</SuperButton>
          </div>
        </div>
      </Modal>
      <SuperButton onClick={addPack}>Add Pack</SuperButton>
    </div>
  );
});
