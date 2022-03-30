import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { PasswordField, SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { selectRegistrationIsCompleted, selectStatus } from 'store/selectors';
import { registrationTC } from 'store/thunks';
import { Flex, Wrapper } from 'styles';
import { getValidErrorMessage } from 'utils';

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = (): ReactElement => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const status = useSelector(selectStatus);
  const RegistrationIsCompleted = useSelector(selectRegistrationIsCompleted);

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

  const onBackLoginClick = (): void => {
    navigate(PATH.LOGIN);
  };

  if (RegistrationIsCompleted) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <Wrapper>
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
          error={getValidErrorMessage(email?.type)}
        />

        <PasswordField
          type="password"
          labelTitle="Password"
          disabled={status === 'loading'}
          {...register('password', { required: true, minLength: 8 })}
          error={getValidErrorMessage(password?.type)}
          placeholder="Password"
        />

        <PasswordField
          labelTitle="Confirm password"
          type="password"
          disabled={status === 'loading'}
          {...register('confirmPassword', {
            required: true,
            minLength: 8,
            validate: value => value === getValues('password'),
          })}
          placeholder="Confirm password"
          error={getValidErrorMessage(confirmPassword?.type)}
        />

        <Flex justifyContent="space-around" alignItems="flex-end">
          <SuperButton size="big" onClick={onBackLoginClick} type="button">
            Cancel
          </SuperButton>
          <SuperButton
            size="big"
            marginTop="90px"
            disabled={status === 'loading'}
            type="submit"
          >
            Register
          </SuperButton>
        </Flex>
      </form>
    </Wrapper>
  );
};
