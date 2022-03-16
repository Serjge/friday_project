import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { HeadTablePacks, PackItem } from 'components';
import { selectPacks } from 'store/selectors';

export const TableCardsPack = memo((): ReactElement => {
  const cards = useSelector(selectPacks);

  const mapCardsPack = cards && cards.map(({ _id }) => <PackItem id={_id} key={_id} />);

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
