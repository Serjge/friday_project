import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  RefAttributes,
} from 'react';

import { ErrorWrapper, Input, InputWrapper, Label } from './style';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType &
  RefAttributes<HTMLInputElement> & {
    onChangeText?: (value: string) => void;
    onEnter?: () => void;
    onCtrlEnter?: () => void;
    error?: string;
    spanClassName?: string;
    labelTitle?: string;
  };

export const TextField: FC<SuperInputTextPropsType> = memo(
  forwardRef(
    (
      {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        onKeyDown,
        onCtrlEnter,
        error,
        labelTitle,
        ...restProps
      },
      ref,
    ) => {
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

      const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (onKeyPress) {
          onKeyPress(e);
        }
        if (onEnter && e.key === 'Enter') {
          onEnter();
        }
      };

      return (
        <Label htmlFor={labelTitle}>
          {labelTitle}
          <InputWrapper>
            <Input
              type="text"
              error={error}
              onChange={onChangeCallback}
              onKeyPress={onKeyPressCallback}
              onKeyDown={onKeyPressCtrlEnterCallback}
              ref={ref}
              {...restProps}
            />
          </InputWrapper>
          <ErrorWrapper>{error && <p>{error}</p>}</ErrorWrapper>
        </Label>
      );
    },
  ),
);
