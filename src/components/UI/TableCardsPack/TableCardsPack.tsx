import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { HeadTablePacks, PackItem } from 'components';
import { selectCards } from 'store/selectors';

export const TableCardsPack = memo((): ReactElement => {
  const cards = useSelector(selectCards);

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
