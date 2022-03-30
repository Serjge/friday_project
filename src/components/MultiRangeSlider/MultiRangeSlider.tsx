import { useCallback, useEffect, useState, useRef, FC, ChangeEvent } from 'react';

import {
  Container,
  Input,
  Slider,
  LeftValue,
  Range,
  RightValue,
  Track,
  Title,
} from './style';

import { RangeValue } from 'enum';
import { DataOnChangeType } from 'types';

type MultiRangeSliderPropTypes = {
  min: number;
  max: number;
  onChange: (Data: DataOnChangeType) => void;
};

export const MultiRangeSlider: FC<MultiRangeSliderPropTypes> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    value => {
      Math.round(((value - min) / (max - min)) * RangeValue.HUNDRED_PERCENT);
    },
    [min, max],
  );

  useEffect(() => {
    setMaxVal(max);
  }, [max]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;

      range.current.style.width = `${Number(maxPercent) - Number(minPercent)}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${Number(maxPercent) - Number(minPercent)}%`;
    }
  }, [maxVal, getPercent]);

  const handleLeftRange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(event.target.value), maxVal - RangeValue.STEP);
    setMinVal(value);
    minValRef.current = value;
  };

  const handleRightRange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(event.target.value), minVal - RangeValue.STEP);
    setMaxVal(value);
    maxValRef.current = value;
  };

  useEffect(() => {
    onChange({ minVal, maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div>
      <Container>
        <Input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleLeftRange}
          currentSide="left"
        />
        <Input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleRightRange}
          currentSide="right"
        />
        <Slider>
          <Track />
          <Range ref={range} />
          <LeftValue>{minVal}</LeftValue>
          <RightValue>{maxVal}</RightValue>
        </Slider>
      </Container>
      <Title>
        <span>min - cards count - max</span>
      </Title>
    </div>
  );
};
