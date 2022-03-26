import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  memo,
  RefAttributes,
} from 'react';

import { CSSProp } from 'styled-components';

import { Button } from './style';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType &
  RefAttributes<any> & {
    size?: 'small' | 'normal';
    marginTop?: CSSProp;
  };

export const SuperButton: FC<SuperButtonPropsType> = memo(
  forwardRef(({ ...restProps }, ref) => <Button ref={ref} {...restProps} />),
);
