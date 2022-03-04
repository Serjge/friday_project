import { ReactElement } from 'react';

import { Header } from 'components';
import { Routers } from 'pages';

export const App = (): ReactElement => (
  <div>
    <Header />
    <Routers />
  </div>
);
