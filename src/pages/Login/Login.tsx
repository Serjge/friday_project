import { ReactElement, useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { ForgotPassword, SingUp, Text } from 'pages/Login/style';
import { setErrorMessage } from 'store/actions';
import { selectErrorMessage, selectIsLogin } from 'store/selectors';
import { setLoginDataThunkCreator } from 'store/thunks';
import { Flex, Wrapper } from 'styles';
import { LoginApiPayloadType } from 'types';
import { getErrorValidate } from 'utils';

export const Login = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMessage('');
  });

  const onLoginClick: SubmitHandler<LoginApiPayloadType> = data => {
    dispatch(setLoginDataThunkCreator(data));
  };

  const {
    register,
    handleSubmit,
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
        <Flex flexDirection="column" alignItems="center">
          <ForgotPassword to={PATH.FORGOT_PASSWORD}>Forgot Password?</ForgotPassword>
          <SuperButton style={{ marginTop: '20px' }} type="submit" value="login">
            login
          </SuperButton>
          <Text>Don’t have an account?</Text>
          <SingUp to={PATH.REGISTRATION}>Sing Up</SingUp>
        </Flex>
      </form>
      {errorMessage || null}
    </Wrapper>
  );
};