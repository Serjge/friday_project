import { ReactElement } from 'react';

import { Star } from 'components';
import { NumberStars } from 'enum';

type RatingPropsType = {
  activeStars: number;
};

export const Rating = ({ activeStars }: RatingPropsType): ReactElement => {
  const roundActiveStars = Math.round(activeStars);

  return (
    <>
      <Star isActive={roundActiveStars > NumberStars.Zero} />
      <Star isActive={roundActiveStars > NumberStars.One} />
      <Star isActive={roundActiveStars > NumberStars.Two} />
      <Star isActive={roundActiveStars > NumberStars.Three} />
      <Star isActive={roundActiveStars > NumberStars.Fore} />
    </>
  );
};
