/* eslint-disable no-unused-expressions */
import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  RefAttributes,
} from 'react';

import style from './SuperInputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType &
  RefAttributes<any> & {
    onChangeText?: (value: string) => void;
    onEnter?: () => void;
    onCtrlEnter?: () => void;
    error?: string;
    spanClassName?: string;
  };

export const SuperInputText: FC<SuperInputTextPropsType> = forwardRef(
  (
    {
      onChange,
      onChangeText,
      onKeyPress,
      onEnter,
      onKeyDown,
      onCtrlEnter,
      error,
      className,
      spanClassName,

      ...restProps
    },
    ref,
  ) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
      onChange && // если есть пропс onChange
        onChange(e); // то передать ему е (поскольку onChange не обязателен)

      onChangeText && onChangeText(e.currentTarget.value);
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
      onKeyPress && onKeyPress(e);

      onEnter && // если есть пропс onEnter
        e.key === 'Enter' && // и если нажата кнопка Enter
        onEnter(); // то вызвать его
    };
    const onKeyPressCtrlEnterCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
      onKeyDown && onKeyDown(e);

      onCtrlEnter && // если есть пропс onEnter
        (e.ctrlKey || e.metaKey) && // и зажата кнопка ctrl или Сmd на mac
        e.key === 'Enter' && // и если нажата кнопка Enter
        onCtrlEnter(); // то вызвать его
    };

    const finalSpanClassName = `${style.error} ${spanClassName || ''}`;
    const finalInputClassName = `${
      error ? style.errorInput : style.superInput
    } ${className}`; // need to fix with (?:) and s.superInput

    return (
      <>
        <input
          type="text"
          onChange={onChangeCallback}
          onKeyPress={onKeyPressCallback}
          className={finalInputClassName}
          onKeyDown={onKeyPressCtrlEnterCallback}
          ref={ref}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
        {error && <span className={finalSpanClassName}>{error}</span>}
      </>
    );
  },
);
