import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PasswordField } from '../PasswordField/PasswordField';
import { SuperButton } from '../SuperButton';

import { selectErrorMessage } from 'store/selectors';
import { sendNewPasswordTC } from 'store/thunks';
import { Wrapper } from 'styles';
import { CreateNewPasswordType, SendNewPasswordType } from 'types';
import { getErrorValidate } from 'utils';

export const WriteNewPassword = (): ReactElement => {
  const dispatch = useDispatch();
  const param = useParams<'token'>();

  const { token } = param;
  const resetPasswordToken = String(token);

  const errorMessage = useSelector(selectErrorMessage);

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
        {/* <TextField */}
        {/*  {...register('password', { required: true, minLength: 8 })} */}
        {/*  type="password" */}
        {/*  labelTitle="New Password:" */}
        {/*  placeholder="Password" */}
        {/*  autoComplete="on" */}
        {/*  error={getErrorValidate(password?.type)} */}
        {/* /> */}
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

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <SuperButton type="submit" value="create">
            Create new password
          </SuperButton>
        </div>
      </form>
      {errorMessage || null}
    </Wrapper>
  );
};
