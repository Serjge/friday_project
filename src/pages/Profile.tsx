import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { RootReducerType } from '../store';

export const Profile = (): ReactElement => {
  const name = useSelector<RootReducerType, string>(state => state.login.name);
  return (
    <div>
      <h1>Profile</h1>
      <h2>Hello, {name}</h2>
    </div>
  );
};
