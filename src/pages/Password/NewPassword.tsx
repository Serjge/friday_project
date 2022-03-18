import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { selectErrorMessage } from 'store/selectors';
import { Wrapper } from 'styles';
import { CreateNewPasswordType } from 'types';
import { getErrorValidate } from 'utils';

export const NewPassword = (): ReactElement => {
  const navigate = useNavigate();

  const param = useParams<'token'>();
  const { token } = param;
  console.log(token);

  const errorMessage = useSelector(selectErrorMessage);

  const {
    register,
    handleSubmit,
    formState: {
      errors: { password },
    },
  } = useForm<CreateNewPasswordType>();

  const createNewPassword: SubmitHandler<CreateNewPasswordType> = data => {
    console.log(data);
    navigate(PATH.LOGIN);
  };

  return (
    <Wrapper>
      <h1>Create new password</h1>
      <form onSubmit={handleSubmit(createNewPassword)}>
        <TextField
          {...register('password', { required: true, minLength: 8 })}
          type="password"
          labelTitle="New Password:"
          placeholder="Password"
          autoComplete="on"
          error={getErrorValidate(password?.type)}
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
