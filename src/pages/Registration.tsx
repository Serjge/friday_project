import { FormEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from 'enum';
import { selectError, selectIsCompleted, selectStatus } from 'store/selectors';
import { registrationTC } from 'store/thunks/registrationThunks';

export const Registration = (): ReactElement => {
  const dispatch = useDispatch();

  const IsCompleted = useSelector(selectIsCompleted);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const send = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(registrationTC(login, password));
  };

  if (IsCompleted) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={send}>
        <input
          value={login}
          onChange={e => setLogin(e.currentTarget.value)}
          type="text"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <button disabled={status === 'loading'} type="submit">
          send
        </button>
      </form>
      {error}
    </div>
  );
};
