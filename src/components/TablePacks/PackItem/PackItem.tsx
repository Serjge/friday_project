import { FC, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DeletePack, EditNamePack, LearnPack, SuperButton } from 'components';
import { PATH } from 'enum';
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
import { Flex, TableItem } from 'styles';

type PackItemPropsType = {
  packId: string;
  background?: string;
};

export const PackItem: FC<PackItemPropsType> = memo(({ packId, background }) => {
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

  const newData = new Date(updateDataPack);
  const isMyPack = userId === userIdPack;

  const onOpenPackClick = (): void => {
    dispatch(setSearchQuestionCardsAC(''));
    dispatch(setSearchAnswerCardsAC(''));
    navigate(`${PATH.CARD}${packId}/${namePack}`);
  };

  return (
    <Flex background={background} justifyContent="center" alignItems="center">
      <TableItem flexBasis="30%">
        {namePack}
        {isMyPack && <EditNamePack namePack={namePack} packId={packId} />}
      </TableItem>
      <TableItem flexBasis="10%">{cardsCount}</TableItem>
      <TableItem flexBasis="10%">{newData.toLocaleDateString()}</TableItem>
      <TableItem flexBasis="30%">{userNamePack}</TableItem>
      <TableItem flexBasis="20%">
        <SuperButton size="small" onClick={onOpenPackClick}>
          Open
        </SuperButton>
        {isMyPack && <DeletePack packId={packId} />}
        {!!cardsCount && <LearnPack packId={packId} cardsCount={cardsCount} />}
      </TableItem>
    </Flex>
  );
});
