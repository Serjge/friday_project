import { useState } from 'react';

export const useModal = (): {
  isActiveModal: boolean;
  openModal: () => void;
  closeModal: () => void;
} => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = (): void => {
    setIsActive(true);
  };

  const closeModal = (): void => {
    setIsActive(false);
  };

  return { isActiveModal: isActive, openModal, closeModal };
};
