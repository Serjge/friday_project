import { useCallback, useEffect, useState, useRef, FC, ChangeEvent } from 'react';

import './multiRangeSlider.css';

import { RangeValue } from 'enum';

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
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);
  // Convert to percentage
  const getPercent = useCallback(
    value => {
      Math.round(((value - min) / (max - min)) * RangeValue.HUNDRED_PERCENT);
    },
    [min, max],
  );

  useEffect(() => {
    setMaxVal(max);
  }, [max]);

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
        onChange={handleLeftRange}
        className="thumb thumb--left"
        // @ts-ignore
        // style={{ zIndex: minVal > max - ValueForRange.HUNDRED_PERCENT && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleRightRange}
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
