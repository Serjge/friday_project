import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import { RootReducerType } from '../../../store';
import { setResultMessageAddPackAC } from '../../../store/actions';
import { selectResultMessage } from '../../../store/selectors';
// import { addPackTC } from '../../../store/thunks';
import { editTitlePackTC } from '../../../store/thunks/addPackThunks';
import { Modal } from '../../Modal';
import { SuperButton, TextField } from '../../UI';
import style from '../AddPack/AddPack.module.css';

type EditNamePackPropsType = {
  id: string;
  namePack: string;
};

export const EditNamePack: FC<EditNamePackPropsType> = ({
  id,
  namePack,
}): ReactElement => {
  const dispatch = useDispatch();

  const resultMessage = useSelector(selectResultMessage);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [newPackTitle, setNewPackTitle] = useState<string>('');

  const editNamePack = (): void => {
    dispatch(editTitlePackTC(id, newPackTitle));
    // console.log(newPackTitle);
  };

  const setIsEditMod = (): void => {
    setIsActive(false);
    dispatch(setResultMessageAddPackAC(''));
  };

  const newPackTitleHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPackTitle(e.currentTarget.value);
  };

  return (
    <div>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div className={style.form}>
          <h3>EDIT NAME PACK</h3>
          <TextField
            labelTitle="New title"
            width="200px"
            defaultValue={namePack}
            onChange={newPackTitleHandle}
          />
          <div className={style.message}>{resultMessage}</div>
          <div>
            <SuperButton onClick={setIsEditMod}>Cancel</SuperButton>
            <SuperButton onClick={editNamePack}>Edit</SuperButton>
          </div>
        </div>
      </Modal>
      <SuperButton onClick={() => setIsActive(true)}>Edit Name Pack</SuperButton>
    </div>
  );
};
