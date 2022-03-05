import { ReactElement } from 'react';

import { SuperButton, SuperInputText } from '../components';

export const Login = (): ReactElement => {
  console.log('asd');

  const {} = useForm();

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          login:
          <SuperInputText name="login" type="text" />
        </div>
        <div>
          password:
          <SuperInputText name="password" type="password" />
        </div>
        <SuperButton type="submit">login</SuperButton>
      </form>
    </div>
  );
};
