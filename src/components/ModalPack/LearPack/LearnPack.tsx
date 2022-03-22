import { ReactElement, useState } from 'react';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';

export const LearnPack = (): ReactElement => {
  // const dispatch = useDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActive2, setIsActive2] = useState<boolean>(false);

  return (
    <div>
      <SuperButton size="small" onClick={() => setIsActive(true)}>
        Learn
      </SuperButton>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div>
          <div>Title</div>
          <div>Question</div>

          <SuperButton onClick={() => setIsActive(false)}>Cancel</SuperButton>
          <SuperButton onClick={() => setIsActive2(true)}>Show answer</SuperButton>
        </div>
      </Modal>
      <Modal isActive={isActive2} changeIsActive={setIsActive2}>
        <div>
          <div>Title</div>
          <div>Question</div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est id
          mollitia, nisi quibusdam quis rem rerum tempore, vel voluptate voluptates! Eos
          error magni maxime molestiae nostrum perspiciatis tempore!
          <SuperButton onClick={() => setIsActive2(false)}>Cancel</SuperButton>
          <SuperButton>Show answer</SuperButton>
        </div>
      </Modal>
    </div>
  );
};
