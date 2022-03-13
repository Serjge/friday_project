import { memo } from 'react';

import { useSelector } from 'react-redux';

import { SuperButton } from 'components/UI/SuperButton';
import { TableItem } from 'components/UI/TableCardsPack/PackItem/style';
import { RootReducerType } from 'store';
import {
  selectCardsCount,
  selectPackName,
  selectUpdateDataPack,
  selectUserId,
  selectUserIdPack,
  selectUserNamePack,
} from 'store/selectors';

export const PackItem = memo(({ id }: { id: string }) => {
  const namePack = useSelector((state: RootReducerType) => selectPackName(state, id));
  const cardsCount = useSelector((state: RootReducerType) => selectCardsCount(state, id));
  const userNamePack = useSelector((state: RootReducerType) =>
    selectUserNamePack(state, id),
  );
  const updateDataPack = useSelector((state: RootReducerType) =>
    selectUpdateDataPack(state, id),
  );
  const dataNew = new Date(updateDataPack);

  const userId = useSelector(selectUserId);
  const userIdPack = useSelector((state: RootReducerType) => selectUserIdPack(state, id));

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableItem width="200px">{namePack}</TableItem>
      <TableItem width="50px">{cardsCount}</TableItem>
      <TableItem width="100px">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem width="200px">{userNamePack}</TableItem>
      <TableItem width="180px">
        <SuperButton size="small" hidden={userId !== userIdPack}>
          Delete
        </SuperButton>
        <SuperButton size="small" hidden={userId !== userIdPack}>
          Edit
        </SuperButton>
        <SuperButton size="small">Learn</SuperButton>
      </TableItem>
    </div>
  );
});
