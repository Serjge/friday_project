import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { WrapperTable } from './style';

import { HeadTablePacks, Loading, PackItem } from 'components';
import { selectPacks } from 'store/selectors';
import { Wrapper } from 'styles';

const EMPTY_ARRAY = 0;
const ZERO_REMAINDER = 0;
const DIVIDE_TWO = 2;

export const TablePacks = memo((): ReactElement => {
  const { tableLineColor } = useTheme();

  const cards = useSelector(selectPacks);

  const mapCardsPack = cards.map(({ _id }, index) => (
    <PackItem
      background={index % DIVIDE_TWO !== ZERO_REMAINDER ? tableLineColor : undefined}
      packId={_id}
      key={_id}
    />
  ));

  if (cards.length === EMPTY_ARRAY) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <WrapperTable>
      <HeadTablePacks />
      {mapCardsPack}
    </WrapperTable>
  );
});
