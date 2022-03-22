import { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DeletePack, SuperButton } from 'components';
import { PATH } from 'enum';
import { PenIcon } from 'icon';
import { RootReducerType } from 'store';
import { setSearchAnswerCardsAC, setSearchQuestionCardsAC } from 'store/actions';
import {
  selectCardsCount,
  selectPackName,
  selectUpdateDataPack,
  selectUserId,
  selectUserIdPack,
  selectUserNamePack,
} from 'store/selectors';
import { deletePackTC } from 'store/thunks';
import { Flex, TableItem } from 'styles';

type PackItemPropsType = {
  packId: string;
};

export const PackItem = memo(({ packId }: PackItemPropsType) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userId = useSelector(selectUserId);
  const namePack = useSelector((state: RootReducerType) => selectPackName(state, packId));
  const userIdPack = useSelector((state: RootReducerType) =>
    selectUserIdPack(state, packId),
  );
  const cardsCount = useSelector((state: RootReducerType) =>
    selectCardsCount(state, packId),
  );
  const userNamePack = useSelector((state: RootReducerType) =>
    selectUserNamePack(state, packId),
  );
  const updateDataPack = useSelector((state: RootReducerType) =>
    selectUpdateDataPack(state, packId),
  );

  const dataNew = new Date(updateDataPack);
  const hiddenEditPackButton = userId !== userIdPack;

  const onDeletePackClick = (): void => {
    dispatch(deletePackTC(packId));
  };

  const onOpenPackClick = (): void => {
    dispatch(setSearchQuestionCardsAC(''));
    dispatch(setSearchAnswerCardsAC(''));
    navigate(`${PATH.CARD}${packId}/${namePack}`);
  };

  return (
    <Flex justifyContent="center">
      <TableItem cursorPointer flexBasis="30%">
        {namePack}
        {!hiddenEditPackButton && <PenIcon />}
      </TableItem>
      <TableItem flexBasis="10%">{cardsCount}</TableItem>
      <TableItem flexBasis="10%">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem flexBasis="30%">{userNamePack}</TableItem>
      <TableItem flexBasis="20%">
        <SuperButton size="small">Learn</SuperButton>
        <SuperButton size="small" onClick={onOpenPackClick}>
          Open
        </SuperButton>
        <DeletePack
          hiddenEditPackButton={hiddenEditPackButton}
          onDeletePackClick={onDeletePackClick}
        />
      </TableItem>
    </Flex>
  );
});
