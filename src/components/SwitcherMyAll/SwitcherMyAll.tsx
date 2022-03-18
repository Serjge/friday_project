import { memo, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SwitcherBox, WrapperSwitcher } from './style';

import { setIsMyPack } from 'store/actions';
import { selectIsMyPack } from 'store/selectors';

export const SwitcherMyAll = memo((): ReactElement => {
  const dispatch = useDispatch();

  const isMyPack = useSelector(selectIsMyPack);

  const onMyPackClick = (): void => {
    dispatch(setIsMyPack(true));
  };

  const onAllPackClick = (): void => {
    dispatch(setIsMyPack(false));
  };

  return (
    <WrapperSwitcher>
      <SwitcherBox side="left" isActive={!isMyPack} onClick={onMyPackClick}>
        My
      </SwitcherBox>
      <SwitcherBox side="right" isActive={isMyPack} onClick={onAllPackClick}>
        All
      </SwitcherBox>
    </WrapperSwitcher>
  );
});
