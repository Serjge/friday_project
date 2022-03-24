import { ReactElement, useState } from 'react';

import { AddPack, Modal, SuperButton } from '../components';
import { EditNamePack } from '../components/ModalPack/EditNamePack/EditNamePack';

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
      <EditNamePack namePack="qqqqqq" />
      <EditNamePack namePack="wwwww" />
      <EditNamePack namePack="zzzzz" />
    </div>
  );
};
