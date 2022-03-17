import { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '500px',
          overflow: 'auto',
          overflowY: 'auto',
          width: '750px',
        }}
      >
        <HeadTablePacks />
        {mapCardsPack}
      </div>
    </div>
  );
});
