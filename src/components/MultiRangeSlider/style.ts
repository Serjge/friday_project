import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slider = styled.div`
  position: relative;
  width: 200px;
`;

export const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ffffff;
  width: 100%;
  z-index: 1;
`;

export const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  z-index: 2;
`;

export const LeftValue = styled.div`
  position: absolute;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;
`;

export const RightValue = styled.div`
  position: absolute;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
`;

const LEFT_Z_INDEX_INPUT = 3;
const RIGHT_Z_INDEX_INPUT = 4;

export const Input = styled.input<{ currentSide: 'left' | 'right' }>`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
  z-index: ${({ currentSide }) =>
    currentSide === 'left' ? LEFT_Z_INDEX_INPUT : RIGHT_Z_INDEX_INPUT};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
