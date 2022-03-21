import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { selectErrorMessage } from 'store/selectors';
import { forgotPasswordTC } from 'store/thunks';
import { Wrapper } from 'styles';
import { ForgotPasswordFormType, ForgotPasswordSendType } from 'types';
import { getErrorValidate } from 'utils';

export const ForgotPassword = (): ReactElement => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSetInstructions: SubmitHandler<ForgotPasswordFormType> = data => {
    const postData: ForgotPasswordSendType = {
      email: data.email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message:
        "<div style='background-color: lime; padding: 15px'>password recovery link: <a href='http://localhost:3000/friday_project#/set-new-password/$token$'>link</a></div>",
    };
    dispatch(forgotPasswordTC(postData));
    navigate(PATH.INSTRUCTION);
  };

  const tryLoginIn = (): void => {
    navigate(PATH.LOGIN);
  };

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email },
    },
  } = useForm<ForgotPasswordFormType>();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <Wrapper>
      <h1>Forgot your password?</h1>
      <form onSubmit={handleSubmit(onSetInstructions)}>
        <TextField
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          labelTitle="Email:"
          placeholder="Email"
          type="text"
          autoComplete="on"
          error={getErrorValidate(email?.type)}
        />

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <p>Enter you email address and we will send you further instructions</p>

          <SuperButton type="submit" value="send">
            Send Instructions
          </SuperButton>

          <div>
            <p>Did you remember you password?</p>
          </div>

          <SuperButton onClick={tryLoginIn} type="button">
            Try logging in
          </SuperButton>
        </div>
      </form>
      {errorMessage || null}
    </Wrapper>
  );
};
