import React, { FC, KeyboardEvent, ReactElement, useRef, useState } from 'react';

import { Item, Items, SelectBody, Title } from './style';

export type SelectType = {
  counts: number[];
  currentCount: number;
  handleCurrentCount: (value: number) => void;
};

const NEX_PREVIOUS_ITEM = 1;
const FIRST_TAB_INDEX = 0;

export const Select: FC<SelectType> = ({
  counts,
  currentCount,
  handleCurrentCount,
}): ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [localCurrentCount, setLocalCurrentCount] = useState<number>(currentCount);

  const qwe = useRef<HTMLDivElement>(null);

  document.onclick = event => {
    if (!qwe.current!.contains(event.target as Node)) {
      setIsCollapsed(false);
    }
  };

  const handleViewSelector = (): void => setIsCollapsed(!isCollapsed);

  const setCurrentCount = (value: number): void => {
    handleCurrentCount(value);
    setLocalCurrentCount(value);
    setIsCollapsed(!isCollapsed);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
    const index = counts.indexOf(localCurrentCount);
    switch (e.key) {
      case 'ArrowDown':
        setIsCollapsed(true);
        if (counts[index + NEX_PREVIOUS_ITEM]) {
          setLocalCurrentCount(counts[index + NEX_PREVIOUS_ITEM]);
        }
        break;
      case 'ArrowUp':
        setIsCollapsed(true);
        if (counts[index - NEX_PREVIOUS_ITEM]) {
          setLocalCurrentCount(counts[index - NEX_PREVIOUS_ITEM]);
        }
        break;
      case 'Enter':
        setIsCollapsed(false);
        handleCurrentCount(localCurrentCount);
        break;
      case 'Escape':
        setIsCollapsed(false);
        setLocalCurrentCount(currentCount);
        break;
      default:
    }
  };

  const selectElements = counts.map(count => (
    <Item
      key={count}
      isCurrentCount={localCurrentCount === count}
      onClick={() => setCurrentCount(count)}
    >
      {count}
    </Item>
  ));

  return (
    <SelectBody ref={qwe} id="select" onKeyUp={onKeyUp}>
      <Items isActive={isCollapsed}>{isCollapsed && selectElements}</Items>
      <Title onClick={handleViewSelector} tabIndex={FIRST_TAB_INDEX}>
        {localCurrentCount}
      </Title>
    </SelectBody>
  );
};
