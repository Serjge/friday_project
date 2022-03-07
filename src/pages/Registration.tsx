import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SuperButton, SuperInputText } from 'components';
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
    navigate(PATH.LOGIN);
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
        <div>
          <label htmlFor="login">
            Login
            <div>
              <SuperInputText
                type="text"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                placeholder="Email"
              />
            </div>
            <p style={{ color: 'darkred' }}>{getErrorValidate(email?.type)}</p>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <div>
              <SuperInputText
                id="password"
                {...register('password', { required: true, minLength: 8 })}
              />
            </div>
            <p style={{ color: 'darkred' }}>{getErrorValidate(password?.type)}</p>
          </label>
        </div>
        <div>
          <label htmlFor="confirmPassword">
            Confirm password
            <div>
              <SuperInputText
                {...register('confirmPassword', {
                  required: true,
                  minLength: 8,
                  validate: value => value === getValues('password'),
                })}
              />
            </div>
            <p style={{ color: 'darkred' }}>{getErrorValidate(confirmPassword?.type)}</p>
          </label>
        </div>
        <div>{errorMessage}</div>
        <SuperButton onClick={onBackClick} type="button">
          Cancel
        </SuperButton>
        <SuperButton disabled={status === 'loading'} type="submit">
          Register
        </SuperButton>
      </form>
    </div>
  );
};
