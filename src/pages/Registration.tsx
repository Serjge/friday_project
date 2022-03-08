import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import {
  selectErrorMessage,
  selectRegistrationIsCompleted,
  selectStatus,
} from 'store/selectors';
import { registrationTC } from 'store/thunks';
import { getErrorValidate } from 'utils';

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = (): ReactElement => {
  const dispatch = useDispatch();

  const RegistrationIsCompleted = useSelector(selectRegistrationIsCompleted);
  const errorMessage = useSelector(selectErrorMessage);
  const status = useSelector(selectStatus);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors: { confirmPassword, password, email },
    },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(registrationTC(data.email, data.password));
  };

  const onBackClick = (): void => {
    navigate(PATH.LOGIN);
  };

  if (RegistrationIsCompleted) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: ' 100px',
        flexDirection: 'column',
      }}
    >
      <h1>Sing UP</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          labelTitle="Email"
          type="text"
          disabled={status === 'loading'}
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          placeholder="Email"
          error={getErrorValidate(email?.type)}
        />
        <TextField
          type="password"
          labelTitle="Password"
          disabled={status === 'loading'}
          {...register('password', { required: true, minLength: 8 })}
          error={getErrorValidate(password?.type)}
          placeholder="Password"
        />
        <TextField
          labelTitle="Confirm password"
          type="password"
          disabled={status === 'loading'}
          {...register('confirmPassword', {
            required: true,
            minLength: 8,
            validate: value => value === getValues('password'),
          })}
          placeholder="Confirm password"
          error={getErrorValidate(confirmPassword?.type)}
        />
        <SuperButton onClick={onBackClick} type="button">
          Cancel
        </SuperButton>
        <SuperButton disabled={status === 'loading'} type="submit">
          Register
        </SuperButton>
        <div>{errorMessage}</div>
      </form>
    </div>
  );
};
