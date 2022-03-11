import React, { ReactElement } from 'react';

import style from 'pages/Page404/Error.module.css';

export const Page404 = (): ReactElement => (
  <div className={style.dive}>
    <div>404</div>
    <div className={style.diveImg} />
    <div>Page not found!</div>
    <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
  </div>
);
