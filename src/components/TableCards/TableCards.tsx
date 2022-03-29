import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { WrapperTableCards } from './style';

import { CardItem, HeadTableCards } from 'components';
import { selectPackCards, selectPackUserId, selectUserId } from 'store/selectors';
import { Wrapper } from 'styles';
import { tableStriped } from 'utils';

const EMPTY_ARRAY = 0;

export const TableCards = memo((): ReactElement => {
  const { tableLineColor } = useTheme();

  const userId = useSelector(selectUserId);
  const cards = useSelector(selectPackCards);
  const packUserId = useSelector(selectPackUserId);

  const mapCards = cards.map(({ _id }, index) => (
    <CardItem
      background={tableStriped(index, tableLineColor)}
      cardId={_id}
      key={_id}
      isMyPack={userId === packUserId}
    />
  ));

  return (
    <WrapperTableCards>
      <HeadTableCards isMyPack={userId === packUserId} />
      {cards.length === EMPTY_ARRAY ? <Wrapper>Not fount card</Wrapper> : mapCards}
    </WrapperTableCards>
  );
});
