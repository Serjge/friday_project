import { UndefinedAnd } from 'types';

const ZERO_REMAINDER = 0;
const DIVIDE_TWO = 2;

export const tableStriped = (index: number, color: string): UndefinedAnd<string> => {
  if (index % DIVIDE_TWO !== ZERO_REMAINDER) {
    return color;
  }
  return undefined;
};
