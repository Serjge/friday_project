import { FC, ReactElement, useCallback } from 'react';

import { ContentBlock, MainBlock } from './style';

type ModalPropsType = {
  isActive: boolean;
  changeIsActive: (value: boolean) => void;
};

export const Modal: FC<ModalPropsType> = ({
  isActive,
  changeIsActive,
  children,
}): ReactElement => {
  const closeModalCB = useCallback(() => {
    changeIsActive(false);
  }, []);

  return (
    <MainBlock role="presentation" onClick={closeModalCB} isActive={isActive}>
      <ContentBlock
        role="presentation"
        isActive={isActive}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </ContentBlock>
    </MainBlock>
  );
};
