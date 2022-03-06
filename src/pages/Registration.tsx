import { FormEvent, ReactElement, useState } from 'react';

import { useDispatch } from 'react-redux';

import { registrationTC } from 'store/thunks/registrationThunks';

export const Registration = (): ReactElement => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const send = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(process.env.REACT_APP_BASE_URL);
    dispatch(registrationTC(login, password));
  };
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
        <button type="submit">send</button>
      </form>
    </div>
  );
};
