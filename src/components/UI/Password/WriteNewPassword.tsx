import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { PasswordField } from '../PasswordField/PasswordField';
import { SuperButton } from '../SuperButton';

import { selectErrorMessage } from 'store/selectors';
import { sendNewPasswordTC } from 'store/thunks';
import { Wrapper } from 'styles';
import { CreateNewPasswordType, SendNewPasswordType } from 'types';
import { getErrorValidate } from 'utils';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 30px;
  // align-items: center;
  border: 1px solid #3498db;
`;

export const PasswordLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

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
      <FormStyle onSubmit={handleSubmit(createNewPassword)}>
        <PasswordLabel>
          <h3 style={{ marginLeft: '30px' }}>New password:</h3>
          <PasswordField
            {...register('password', { required: true, minLength: 8 })}
            type="password"
            // labelTitle="New Password:"
            placeholder="Password"
            autoComplete="no"
            error={getErrorValidate(password?.type)}
          />
        </PasswordLabel>
        <PasswordLabel>
          <h3 style={{ marginLeft: '30px' }}>Confirm password:</h3>
          <PasswordField
            // labelTitle="Confirm password"
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
        </PasswordLabel>

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <SuperButton type="submit" value="create">
            Create new password
          </SuperButton>
        </div>
      </FormStyle>
      {errorMessage || null}
    </Wrapper>
  );
};
