import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from '../AddPack/AddPack.module.css';

import { Modal } from 'components';
import { SuperButton, TextField } from 'components/UI';
import { PenIcon } from 'icon';
import { setResultMessageAddPackAC } from 'store/actions';
import { selectResultMessage } from 'store/selectors';
import { editTitlePackTC } from 'store/thunks';

type EditNamePackPropsType = {
  namePack: string;
  packId: string;
};

export const EditNamePack: FC<EditNamePackPropsType> = ({
  namePack,
  packId,
}): ReactElement => {
  const dispatch = useDispatch();
  const resultMessage = useSelector(selectResultMessage);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [newPackTitle, setNewPackTitle] = useState<string>('');

  const editNamePack = (): void => {
    dispatch(editTitlePackTC(packId, newPackTitle));
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
      <div onClick={() => setIsActive(true)} role="presentation">
        <PenIcon />
      </div>
    </div>
  );
};
