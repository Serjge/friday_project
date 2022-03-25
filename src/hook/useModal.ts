import { useCallback, useState } from 'react';

export const useModal = (): {
  isActiveModal: boolean;
  openModal: () => void;
  closeModal: () => void;
} => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = useCallback((): void => {
    setIsActive(true);
  }, []);

  const closeModal = useCallback((): void => {
    setIsActive(false);
  }, []);

  return { isActiveModal: isActive, openModal, closeModal };
};
