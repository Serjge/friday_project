import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { selectErrorMessage, selectIsLogin } from 'store/selectors';
import { setLoginDataThunkCreator } from 'store/thunks';
import { Wrapper } from 'styles';
import { LoginApiPayloadType } from 'types';

export const Login = (): ReactElement => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onLoginClick: SubmitHandler<LoginApiPayloadType> = data => {
    dispatch(setLoginDataThunkCreator(data));
  };

  const onSingUpClick = (): void => {
    navigate(PATH.REGISTRATION);
  };

  const { register, handleSubmit } = useForm<LoginApiPayloadType>();
  const isLogin = useSelector(selectIsLogin);
  const errorMessage = useSelector(selectErrorMessage);
  // нужна проверка авторизации, но это скорее можно всунуть в санку authMe, типо если не залогинен то редирект на логин. Так по крайней мере написано в описании запроса(проверка, сохранены ли куки)
  if (isLogin) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <Wrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onLoginClick)}>
        <TextField
          {...register('email')}
          labelTitle="login:"
          placeholder="Email"
          type="text"
          autoComplete="on"
        />
        <TextField
          {...register('password')}
          type="password"
          labelTitle="Password:"
          placeholder="Password"
          autoComplete="on"
        />
        <TextField
          {...register('rememberMe')}
          labelTitle="Remember me:"
          type="checkbox"
          autoComplete="on"
        />

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <SuperButton type="submit" value="login">
            login
          </SuperButton>

          <div>
            <p>Don’t have an account?</p>
          </div>

          <SuperButton onClick={onSingUpClick} type="button">
            Sing Up
          </SuperButton>
        </div>
      </form>
      {errorMessage || null}
    </Wrapper>
  );
};
