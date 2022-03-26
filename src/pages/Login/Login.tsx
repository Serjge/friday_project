import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PasswordField, SuperButton, TextField } from 'components';
import { CheckBox } from 'components/UI/Checkbox/CheckBox';
import { PATH } from 'enum';
import { ForgotPassword, SingUp, Text } from 'pages/Login/style';
import { selectIsLogin } from 'store/selectors';
import { setLoginDataThunkCreator } from 'store/thunks';
import { Flex, Wrapper } from 'styles';
import { LoginApiPayloadType } from 'types';
import { getErrorValidate } from 'utils';

export const Login = (): ReactElement => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);

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

  if (isLogin) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <div>
      <Wrapper>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onLoginClick)}>
          <TextField
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            labelTitle="Login:"
            placeholder="Email"
            type="text"
            autoComplete="on"
            error={getErrorValidate(email?.type)}
          />
          <PasswordField
            {...register('password', { required: true, minLength: 8 })}
            type="password"
            labelTitle="Password:"
            placeholder="Password"
            autoComplete="on"
            error={getErrorValidate(password?.type)}
          />
          <Flex justifyContent="space-between">
            <CheckBox
              {...register('rememberMe')}
              labelTitle="Remember me:"
              type="checkbox"
              autoComplete="on"
            />
            <ForgotPassword to={PATH.FORGOT_PASSWORD}>Forgot Password?</ForgotPassword>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <SuperButton style={{ marginTop: '20px' }} type="submit" value="login">
              login
            </SuperButton>
            <Text>Don’t have an account?</Text>
            <SingUp to={PATH.REGISTRATION}>Sing Up</SingUp>
          </Flex>
        </form>
      </Wrapper>
    </div>
  );
};
