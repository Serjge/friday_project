import { ReactElement } from 'react';

import { Background, MainDiv } from './style';

export const Page404 = (): ReactElement => (
  <MainDiv>
    <div>404</div>
    <Background />
    <div>Page not found!</div>
    <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
  </MainDiv>
);
