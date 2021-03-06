import { mixArrayItems } from 'utils/mixArrayItems';

let initArray: number[];

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  initArray = [1, 2, 3, 4, 5];
});

test('get numbers from enum', () => {
  const newArray = mixArrayItems(initArray);

  const randomInitItem = initArray[Math.floor(Math.random() * initArray.length)];

  expect(newArray).not.toBe(initArray);
  expect(newArray.length).toBe(initArray.length);
  expect(newArray.find(number => number === randomInitItem)).not.toBeUndefined();
});
