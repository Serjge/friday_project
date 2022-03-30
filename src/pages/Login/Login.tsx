import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PasswordField, SuperButton, TextField, CheckBox } from 'components';
import { PATH } from 'enum';
import { ForgotPassword } from 'pages/Login/style';
import { selectIsLogin } from 'store/selectors';
import { setLoginDataThunkCreator } from 'store/thunks';
import { Flex, HelpText, LinkStyle, Wrapper } from 'styles';
import { LoginApiPayloadType } from 'types';
import { getValidErrorMessage } from 'utils';

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
            defaultValue="test@test.ru"
            labelTitle="Login:"
            placeholder="Email"
            type="text"
            autoComplete="on"
            error={getValidErrorMessage(email?.type)}
          />
          <PasswordField
            {...register('password', { required: true, minLength: 8 })}
            defaultValue="test@test.ru"
            type="password"
            labelTitle="Password:"
            placeholder="Password"
            autoComplete="on"
            error={getValidErrorMessage(password?.type)}
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
          <Flex margin="90px 0 0" flexDirection="column" alignItems="center">
            <SuperButton
              size="big"
              style={{ marginTop: '20px' }}
              type="submit"
              value="login"
            >
              Login
            </SuperButton>
            <HelpText>Don’t have an account?</HelpText>
            <LinkStyle to={PATH.REGISTRATION}>Sing Up</LinkStyle>
          </Flex>
        </form>
      </Wrapper>
    </div>
  );
};
