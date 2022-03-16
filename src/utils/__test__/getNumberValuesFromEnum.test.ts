import { getNumberValuesFromEnum } from 'utils/getNumberValuesFromEnum';

enum newEnum {
  zero,
  one,
  two,
  three,
  someNumber = 100,
}

beforeEach(() => {});

test('get numbers from enum', () => {
  const result = getNumberValuesFromEnum(newEnum);

  expect(Array.isArray(result)).toBeTruthy();
  expect(result[newEnum.zero]).toBe(newEnum.zero);
  expect(result[newEnum.three]).toBe(newEnum.three);
  expect(result.indexOf(newEnum.someNumber)).toBeTruthy();
});
