import * as React from 'react';
import { memo, ReactElement, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { HeaderButton, HeaderWrapper } from './style';

import { PATH } from 'enum';
import { selectIsLogin } from 'store/selectors';
import { logOutThunkCreator } from 'store/thunks';

export const Header = memo((): ReactElement => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);

  const logOut = useCallback((): void => {
    dispatch(logOutThunkCreator());
  }, []);

  return (
    <HeaderWrapper>
      {isLogin && (
        <>
          <NavLink to={PATH.CARDS}>
            {({ isActive }) => (
              <HeaderButton isActive={isActive}>Packs list</HeaderButton>
            )}
          </NavLink>
          <NavLink to={PATH.PROFILE}>
            {({ isActive }) => <HeaderButton isActive={isActive}>Profile</HeaderButton>}
          </NavLink>
          <HeaderButton onClick={logOut}>logOut</HeaderButton>
        </>
      )}
    </HeaderWrapper>
  );
});
