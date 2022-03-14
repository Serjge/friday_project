import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Header, Loading } from 'components';
import { PATH } from 'enum';
import { Routers } from 'pages';
import { selectIsInitialize, selectIsLogin } from 'store/selectors';
import { authMeTC } from 'store/thunks/profileThunks';
import { Wrapper } from 'styles';

export const App = (): ReactElement => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  // const navigate = useNavigate();
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
  if (!isLogin) {
    <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div>
      <Header />
      <Routers />
    </div>
  );
};
