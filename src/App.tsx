import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Header } from 'components';
import { Routers } from 'pages';
import { selectIsInitialize } from 'store/selectors';
import { initializeMeTC } from 'store/thunks';

export const App = (): ReactElement => {
  const dispatch = useDispatch();

  const isInitialize = useSelector(selectIsInitialize);

  useEffect(() => {
    dispatch(initializeMeTC());
  }, []);

  if (!isInitialize) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Routers />
    </div>
  );
};
