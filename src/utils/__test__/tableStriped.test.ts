import { tableStriped } from 'utils/tableStriped';

const oddIndex: number = 111;
const honesIndex: number = 22;
let color: string;

beforeEach(() => {
  color = 'college';
});

test('set color if index is odd ', () => {
  const result = tableStriped(oddIndex, color);

  expect(result).toBe(color);
});

test('set color if index is honest', () => {
  const result = tableStriped(honesIndex, color);

  expect(result).toBeUndefined();
});
