import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CreatePasswordDiv } from './style';

import { PasswordField, SuperButton } from 'components';
import { sendNewPasswordTC } from 'store/thunks';
import { Wrapper } from 'styles';
import { CreateNewPasswordType, SendNewPasswordType } from 'types';
import { getErrorValidate } from 'utils';

export const WriteNewPassword = (): ReactElement => {
  const dispatch = useDispatch();
  const param = useParams<'token'>();

  const { token } = param;
  const resetPasswordToken = String(token);

  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors: { password, confirmPassword },
    },
  } = useForm<CreateNewPasswordType>();

  const createNewPassword: SubmitHandler<CreateNewPasswordType> = data => {
    const newPasswordData: SendNewPasswordType = {
      password: data.password,
      resetPasswordToken,
    };
    dispatch(sendNewPasswordTC(newPasswordData));
  };

  return (
    <Wrapper>
      <h1>Create new password</h1>
      <form onSubmit={handleSubmit(createNewPassword)}>
        <PasswordField
          {...register('password', { required: true, minLength: 8 })}
          type="password"
          labelTitle="New Password:"
          placeholder="Password"
          autoComplete="no"
          error={getErrorValidate(password?.type)}
        />
        <PasswordField
          labelTitle="Confirm password"
          type="password"
          {...register('confirmPassword', {
            required: true,
            minLength: 8,
            validate: value => value === getValues('password'),
          })}
          id="confirmPassword"
          placeholder="Confirm password"
          error={getErrorValidate(confirmPassword?.type)}
        />

        <CreatePasswordDiv>
          <SuperButton marginTop="90px" type="submit" value="create">
            Create new password
          </SuperButton>
        </CreatePasswordDiv>
      </form>
    </Wrapper>
  );
};
