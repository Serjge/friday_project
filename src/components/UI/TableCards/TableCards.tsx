import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { CardItem, HeadTableCards } from 'components';
import { selectPackCards } from 'store/selectors';

export const TableCards = memo((): ReactElement => {
  const cards = useSelector(selectPackCards);

  const mapCards = cards && cards.map(({ _id }) => <CardItem id={_id} key={_id} />);

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
          width: '900px',
        }}
      >
        <HeadTableCards />
        {mapCards}
      </div>
    </div>
  );
});
