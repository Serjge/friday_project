import { ReactElement, useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { setErrorMessage } from 'store/actions';
import { selectErrorMessage, selectIsLogin } from 'store/selectors';
import { setLoginDataThunkCreator } from 'store/thunks';
import { Wrapper } from 'styles';
import { LoginApiPayloadType } from 'types';
import { getErrorValidate } from 'utils';

export const Login = (): ReactElement => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage('');
  });

  const onLoginClick: SubmitHandler<LoginApiPayloadType> = data => {
    dispatch(setLoginDataThunkCreator(data));
  };

  const onSingUpClick = (): void => {
    navigate(PATH.REGISTRATION);
  };

  const {
    register,
    handleSubmit,
    // getValues,
    formState: {
      errors: { email, password },
    },
  } = useForm<LoginApiPayloadType>();
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
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          labelTitle="login:"
          placeholder="Email"
          type="text"
          autoComplete="on"
          error={getErrorValidate(email?.type)}
        />
        <TextField
          {...register('password', { required: true, minLength: 8 })}
          type="password"
          labelTitle="Password:"
          placeholder="Password"
          autoComplete="on"
          error={getErrorValidate(password?.type)}
        />
        <TextField
          {...register('rememberMe')}
          labelTitle="Remember me:"
          type="checkbox"
          autoComplete="on"
        />

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <h3>Forgot Password?</h3>

          <a href="http://localhost:3000/friday_project#/forgot-password">Click here!</a>

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
