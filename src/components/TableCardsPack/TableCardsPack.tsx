import { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { WrapperTable } from './style';

import { HeadTablePacks, PackItem } from 'components';
import { selectPacks } from 'store/selectors';
import { deletePackTC } from 'store/thunks';

export const TableCardsPack = memo((): ReactElement => {
  const dispatch = useDispatch();

  const cards = useSelector(selectPacks);

  const deletePack = (packId: string): void => {
    dispatch(deletePackTC(packId));
  };

  const mapCardsPack =
    cards &&
    cards.map(({ _id }) => <PackItem id={_id} key={_id} deletePack={deletePack} />);

  return (
    <WrapperTable>
      <HeadTablePacks />
      {mapCardsPack}
    </WrapperTable>
  );
});
