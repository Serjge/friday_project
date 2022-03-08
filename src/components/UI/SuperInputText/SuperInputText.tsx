import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
} from 'react';

import style from './SuperInputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  onCtrlEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

export const SuperInputText: FC<SuperInputTextPropsType> = memo(
  ({
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
  }) => {
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (onKeyPress) {
        onKeyPress(e);
      }
      if (onEnter && e.key === 'Enter') {
        onEnter();
      }
    };

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) {
        onChange(e);
      }
      if (onChangeText) {
        onChangeText(e.currentTarget.value);
      }
    };

    const onKeyPressCtrlEnterCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (onKeyDown) {
        onKeyDown(e);
      }
      if (onCtrlEnter && (e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        onCtrlEnter();
      }
    };

    const finalSpanClassName = `${style.error} ${spanClassName || ''}`;
    const finalInputClassName = `${
      error ? style.errorInput : style.superInput
    } ${className}`;

    return (
      <>
        <input
          type="text"
          onChange={onChangeCallback}
          onKeyPress={onKeyPressCallback}
          className={finalInputClassName}
          onKeyDown={onKeyPressCtrlEnterCallback}
          {...restProps}
        />
        {error && <span className={finalSpanClassName}>{error}</span>}
      </>
    );
  },
);
