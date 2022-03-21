import { ReactElement, useState } from 'react';

import { AddPack, SuperButton } from 'components';
import { Modal } from 'components/Modal/Modal';

export const Test = (): ReactElement => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <AddPack />
      <h1>Test</h1>

      <SuperButton onClick={() => setValue(true)}>Modal</SuperButton>
      <Modal isActive={value} changeIsActive={setValue}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid cum
          dicta dignissimos dolore ea eos eum iusto, modi praesentium qui sit unde?
          Nesciunt, voluptas voluptate! Consectetur cupiditate nesciunt quo.
        </div>{' '}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid cum
          dicta dignissimos dolore ea eos eum iusto, modi praesentium qui sit unde?
          Nesciunt, voluptas voluptate! Consectetur cupiditate nesciunt quo.
        </div>
      </Modal>
    </div>
  );
};
