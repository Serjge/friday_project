import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  RefAttributes,
  useCallback,
} from 'react';

import { ErrorWrapper, InputWrapper, Label } from './style';

import { Input } from 'styles';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextFieldPropsType = DefaultInputPropsType &
  RefAttributes<HTMLInputElement> & {
    onChangeText?: (value: string) => void;
    onEnter?: () => void;
    onCtrlEnter?: () => void;
    error?: string;
    spanClassName?: string;
    labelTitle?: string;
    id?: string;
  };

export const TextField: FC<TextFieldPropsType> = memo(
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
      const onChangeCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
          if (onChange) {
            onChange(e);
          }
          if (onChangeText) {
            onChangeText(e.currentTarget.value);
          }
        },
        [onChange, onChangeText],
      );

      const onKeyPressCtrlEnterCallback = useCallback(
        (e: KeyboardEvent<HTMLInputElement>): void => {
          if (onKeyDown) {
            onKeyDown(e);
          }
          if (onCtrlEnter && (e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            onCtrlEnter();
          }
        },
        [onKeyDown, onCtrlEnter],
      );

      const onKeyPressCallback = useCallback(
        (e: KeyboardEvent<HTMLInputElement>): void => {
          if (onKeyPress) {
            onKeyPress(e);
          }
          if (onEnter && e.key === 'Enter') {
            onEnter();
          }
        },
        [onEnter, onKeyPress],
      );

      return (
        <Label htmlFor={labelTitle}>
          {labelTitle}
          <InputWrapper>
            <Input
              error={error}
              onChange={onChangeCallback}
              onKeyPress={onKeyPressCallback}
              onKeyDown={onKeyPressCtrlEnterCallback}
              className="text"
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
