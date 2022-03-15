import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './AddPack.module.css';

import { SuperButton, SuperInputText } from 'components/UI';
import { setAddModAC, setResultMessageAddPackAC } from 'store/actions';
import { selectIsAddMod, selectResultMessage } from 'store/selectors';
import { addPackTC } from 'store/thunks';

export const AddPack = (): ReactElement => {
  const dispatch = useDispatch();

  const isAddMod = useSelector(selectIsAddMod);
  const resultMessage = useSelector(selectResultMessage);

  const setNewPack = (): void => {
    dispatch(addPackTC());
  };
  const setIsAddMod = (isAdd: boolean): void => {
    dispatch(setAddModAC(isAdd));
    dispatch(setResultMessageAddPackAC(''));
  };

  return (
    <div>
      {isAddMod && (
        <div className={style.addBlock}>
          <div className={style.form}>
            <span className={style.title}>ADD NEW PACK</span>
            <div className={style.input}>
              <span>New title</span>
              <SuperInputText value="new title from EPIC TEAM" />
            </div>
            <div className={style.message}>{resultMessage}</div>
            <div>
              <SuperButton onClick={() => setIsAddMod(false)}>Cancel</SuperButton>
              <SuperButton onClick={setNewPack}>Add</SuperButton>
            </div>
          </div>
        </div>
      )}
      <SuperButton onClick={() => setIsAddMod(true)}>Add Pack</SuperButton>
    </div>
  );
};
