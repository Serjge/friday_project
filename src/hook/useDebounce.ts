import { useCallback, useRef } from 'react';

export function useDebounce(
  callback: (value: string) => void,
  delay: number,
): (value: string) => void {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (value: string) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay],
  );
}
