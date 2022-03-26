import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { forgotPasswordTC } from 'store/thunks';
import { Flex, HelpText, LinkStyle, Wrapper } from 'styles';
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

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email },
    },
  } = useForm<ForgotPasswordFormType>();

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
        <Flex alignItems="center" flexDirection="column">
          <HelpText>
            Enter you email address and we will send you further instructions
          </HelpText>

          <SuperButton marginTop="90px" type="submit" value="send">
            Send Instructions
          </SuperButton>

          <div>
            <HelpText>Did you remember you password?</HelpText>
          </div>

          <LinkStyle to={PATH.LOGIN}>Try logging in</LinkStyle>
        </Flex>
      </form>
    </Wrapper>
  );
};
