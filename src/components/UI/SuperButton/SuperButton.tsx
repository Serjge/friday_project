import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  memo,
  RefAttributes,
} from 'react';

import { Button } from './style';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType &
  RefAttributes<any> & {
    size?: 'small' | 'normal';
  };

export const SuperButton: FC<SuperButtonPropsType> = memo(
  forwardRef(({ ...restProps }, ref) => (
    <Button type="button" ref={ref} {...restProps} />
  )),
);
