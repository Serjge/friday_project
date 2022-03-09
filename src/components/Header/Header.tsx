import { ReactElement } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import style from './Header.module.css';

import { SuperButton } from 'components/UI';
import { PATH } from 'enum';
import { logOutThunkCreator } from 'store/thunks';

const HeaderWrapper = styled.header`
  margin: 0 auto;
  padding: 20px;
`;

export const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const classActive = (active: { isActive: boolean }): string =>
    active.isActive ? `${style.link} + ${style.act}` : style.link;

  const logOutHandle = (): void => {
    dispatch(logOutThunkCreator());
  };

  return (
    <HeaderWrapper>
      <NavLink className={classActive} to={PATH.LOGIN}>
        LOGIN
      </NavLink>
      <NavLink className={classActive} to={PATH.PROFILE}>
        PROFILE
      </NavLink>
      <NavLink className={classActive} to={PATH.REGISTRATION}>
        REGISTRATION
      </NavLink>
      <NavLink className={classActive} to={PATH.RECOVERY}>
        RECOVERY
      </NavLink>
      <NavLink className={classActive} to={PATH.PAGE404}>
        PAGE404
      </NavLink>
      <NavLink className={classActive} to={PATH.NEW_PASSWORD}>
        NEW_PASSWORD
      </NavLink>
      <NavLink className={classActive} to={PATH.TEST}>
        TEST
      </NavLink>
      <SuperButton type="button" onClick={logOutHandle}>
        logOut
      </SuperButton>
    </HeaderWrapper>
  );
};

// type ButtonPropsType = {
//   isActive: boolean;
// };
//
// const Button = styled(NavLink)`
//   margin-right: 20px;
//   background-color: #3498db;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   min-width: 80px;
//   cursor: pointer;
//   text-decoration: none;
// `;
