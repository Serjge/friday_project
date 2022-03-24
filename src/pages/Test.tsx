import { ReactElement, useState } from 'react';

import { AddPack, Modal, SuperButton } from '../components';
import { PasswordField } from '../components/UI/PasswordField/PasswordField';

export const Test = (): ReactElement => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <AddPack />
      <h1>Test</h1>

      <SuperButton onClick={() => setIsActive(true)}>Modal</SuperButton>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        {/* <DeletePack /> */}
      </Modal>
      <PasswordField />
    </div>
  );
};
