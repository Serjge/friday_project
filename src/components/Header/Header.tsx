import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SuperButton } from 'components/UI';
import { PATH } from 'enum';
import { selectIsLogin } from 'store/selectors';
import { logOutThunkCreator } from 'store/thunks';

const HeaderWrapper = styled.header`
  margin: 0 auto;
  padding: 20px;
`;

export const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  const navigate = useNavigate();

  // const classActive = (active: { isActive: boolean }): string =>
  //   active.isActive ? `${style.link} + ${style.act}` : style.link;

  const logOutHandle = (): void => {
    dispatch(logOutThunkCreator());
  };

  useEffect(() => {
    if (!isLogin) {
      navigate(PATH.LOGIN);
    }
  }, [isLogin]);

  return (
    <HeaderWrapper>
      {/* <NavLink className={classActive} to={PATH.LOGIN}> */}
      {/*   LOGIN */}
      {/* </NavLink> */}
      {/* <NavLink className={classActive} to={PATH.PROFILE}> */}
      {/*   PROFILE */}
      {/* </NavLink> */}
      {/* <NavLink className={classActive} to={PATH.REGISTRATION}> */}
      {/*   REGISTRATION */}
      {/* </NavLink> */}
      {/* <NavLink className={classActive} to={PATH.RECOVERY}> */}
      {/*   RECOVERY */}
      {/* </NavLink> */}
      {/* <NavLink className={classActive} to={PATH.PAGE404}> */}
      {/*   PAGE404 */}
      {/* </NavLink> */}
      {/* <NavLink className={classActive} to={PATH.NEW_PASSWORD}> */}
      {/*   NEW_PASSWORD */}
      {/* </NavLink> */}
      {/* <NavLink className={classActive} to={PATH.TEST}> */}
      {/*   TEST */}
      {/* </NavLink> */}
      {isLogin && (
        <SuperButton type="button" onClick={logOutHandle}>
          logOut
        </SuperButton>
      )}
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
