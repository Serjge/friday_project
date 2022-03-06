import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { LoginApiPayloadType } from 'api/instance';
import { RootReducerType } from 'store';
import {
  isLoginThunkCreator,
  logOutThunkCreator,
  setLoginDataThunkCreator,
} from 'store/reducers/loginReducer';

export const Login = (): ReactElement => {
  const dispatch = useDispatch();

  const loginHandle: SubmitHandler<LoginApiPayloadType> = data => {
    dispatch(setLoginDataThunkCreator(data));
  };
  const logOutHandle = (): void => {
    dispatch(logOutThunkCreator());
  };
  const isLogOutHandle = (): void => {
    dispatch(isLoginThunkCreator());
  };

  const { register, handleSubmit } = useForm<LoginApiPayloadType>();
  // const token = useSelector<RootReducerType, string>(state => state.login.token);
  const error = useSelector<RootReducerType, string>(state => state.login.error);

  // if (token !== undefined) {
  //   return <Navigate to={PATH.PROFILE} />;
  // }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginHandle)}>
        <div>
          login:
          <input {...register('email')} type="text" autoComplete="on" />
        </div>
        <div>
          password :
          <input {...register('password')} type="password" autoComplete="on" />
        </div>
        <div>
          Remember me:
          <input {...register('rememberMe')} type="checkbox" autoComplete="on" />
        </div>
        <div>
          <button type="submit" value="login">
            login
          </button>
        </div>
        <div>
          <button type="button" onClick={logOutHandle}>
            logOut
          </button>
          <div>
            <button type="button" onClick={isLogOutHandle}>
              is Login ?
            </button>
          </div>
        </div>
      </form>
      {error || null}
    </div>
  );
};
