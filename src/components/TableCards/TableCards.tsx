import { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { WrapperTableCards } from './style';

import { CardItem, HeadTableCards } from 'components';
import { selectPackCards, selectPackUserId, selectUserId } from 'store/selectors';

export const TableCards = memo((): ReactElement => {
  const userId = useSelector(selectUserId);
  const cards = useSelector(selectPackCards);
  const packUserId = useSelector(selectPackUserId);

  const mapCards =
    cards &&
    cards.map(({ _id }) => (
      <CardItem cardId={_id} key={_id} isMyPack={userId === packUserId} />
    ));

  return (
    <WrapperTableCards>
      <HeadTableCards isMyPack={userId === packUserId} />
      {mapCards}
    </WrapperTableCards>
  );
});
