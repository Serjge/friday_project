import { ReactElement } from 'react';

import { LoadingWrapper } from 'components/UI/Loading/style';

export const Loading = (): ReactElement => (
  <LoadingWrapper className="loading">
    <span />
    <span />
    <span />
    <span />
    <span />
  </LoadingWrapper>
);
