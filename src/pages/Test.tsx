import { ReactElement, useState } from 'react';

import { AddPack, SuperButton } from 'components';
import { Modal } from 'components/Modal/Modal';

export const Test = (): ReactElement => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <AddPack />
      <h1>Test</h1>

      <SuperButton onClick={() => setIsActive(true)}>Modal</SuperButton>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid cum
          dicta dignissimos dolore ea eos eum iusto, modi praesentium qui sit unde?
          Nesciunt, voluptas voluptate! Consectetur cupiditate nesciunt quo.
        </div>
      </Modal>
    </div>
  );
};
