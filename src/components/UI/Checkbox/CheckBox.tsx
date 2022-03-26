import {
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  RefAttributes,
} from 'react';

import { Checkmark, Input, Label } from './style';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CheckBoxPropsType = DefaultInputPropsType &
  RefAttributes<HTMLInputElement> & {
    labelTitle?: string;
  };

export const CheckBox: FC<CheckBoxPropsType> = forwardRef(
  ({ labelTitle, ...res }, ref) => (
    <Label>
      {labelTitle}
      <Input hidden={false} ref={ref} {...res} type="checkbox" />
      <Checkmark />
    </Label>
  ),
);
