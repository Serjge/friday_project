import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { WrapperTable } from './style';

import { HeadTablePacks, PackItem } from 'components';
import { selectPacks } from 'store/selectors';
import { Wrapper } from 'styles';
import { tableStriped } from 'utils';

const EMPTY_ARRAY = 0;

export const TablePacks = memo((): ReactElement => {
  const { tableLineColor } = useTheme();

  const cards = useSelector(selectPacks);

  const mapCardsPack = cards.map(({ _id }, index) => (
    <PackItem background={tableStriped(index, tableLineColor)} packId={_id} key={_id} />
  ));

  return (
    <WrapperTable>
      <HeadTablePacks />
      {cards.length === EMPTY_ARRAY ? <Wrapper>Not fount pack</Wrapper> : mapCardsPack}
    </WrapperTable>
  );
});
