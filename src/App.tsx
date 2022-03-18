import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Header, Loading } from 'components';
import { Routers } from 'pages';
import { selectIsInitialize } from 'store/selectors';
import { authMeTC } from 'store/thunks/profileThunks';
import { Wrapper } from 'styles';

export const App = (): ReactElement => {
  const dispatch = useDispatch();

  const isInitialize = useSelector(selectIsInitialize);

  useEffect(() => {
    dispatch(authMeTC());
  }, []);

  if (!isInitialize) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <div>
      <Header />
      <Routers />
    </div>
  );
};
