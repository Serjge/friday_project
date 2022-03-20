/* eslint-disable @typescript-eslint/no-magic-numbers */
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { ValueForRange } from 'enum';

import './multiRangeSlider.css';

type DataOnChangeType = {
  minVal: number;
  maxVal: number;
};

type MultiRangeSliderPropTypes = {
  min: number;
  max: number;
  onChange: (Data: DataOnChangeType) => void;
};

export const MultiRangeSlider: FC<MultiRangeSliderPropTypes> = ({
  min = 0,
  max = 100,
  onChange,
}) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLInputElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number): void => {
      Math.round(((value - min) / (max - min)) * ValueForRange.HUNDRED_PERCENT);
    },
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${Number(maxPercent) - Number(minPercent)}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${Number(maxPercent) - Number(minPercent)}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ minVal, maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal - ValueForRange.STEP);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        // @ts-ignore
        // style={{ zIndex: minVal > max - ValueForRange.HUNDRED_PERCENT && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => {
          const value = Math.max(Number(event.target.value), minVal + ValueForRange.STEP);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};
