import React, { ReactElement } from 'react';

import { StarIcon } from 'icon';

type StarPropsType = {
  isActive: boolean;
};

export const Star = ({ isActive }: StarPropsType): ReactElement => (
  <StarIcon isActive={isActive} />
);
