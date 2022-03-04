/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import style from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  // eslint-disable-next-line react/require-default-props
  red?: boolean;
};

export const SuperButton: FC<SuperButtonPropsType> = ({
  red,
  className,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `${red ? style.red : style.default} ${className}`;

  return (
    <button
      type="button"
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};
