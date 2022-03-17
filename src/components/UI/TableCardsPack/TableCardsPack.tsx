import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { WrapperTable } from './style';

import { HeadTablePacks, PackItem } from 'components';
import { selectPacks } from 'store/selectors';

export const TableCardsPack = memo((): ReactElement => {
  const cards = useSelector(selectPacks);

  const mapCardsPack = cards && cards.map(({ _id }) => <PackItem id={_id} key={_id} />);

  return (
    <WrapperTable>
      <HeadTablePacks />
      {mapCardsPack}
    </WrapperTable>
  );
});
