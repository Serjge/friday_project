import { memo, ReactElement, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SuperButton } from 'components';
import { PATH } from 'enum';
import { selectIsLogin } from 'store/selectors';
import { logOutThunkCreator } from 'store/thunks';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Header = memo((): ReactElement => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  const navigate = useNavigate();

  const logOutHandle = useCallback((): void => {
    dispatch(logOutThunkCreator());
  }, []);

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

      {isLogin && (
        <>
          <SuperButton type="button" onClick={() => navigate(PATH.CARDS)}>
            Packs list
          </SuperButton>
          <SuperButton type="button" onClick={() => navigate(PATH.PROFILE)}>
            Profile
          </SuperButton>
          <SuperButton type="button" onClick={logOutHandle}>
            logOut
          </SuperButton>
        </>
      )}
    </HeaderWrapper>
  );
});

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
