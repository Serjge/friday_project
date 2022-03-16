export const getValuesFromEnum = (someEnum: object): number[] =>
  Object.values(someEnum)
    .filter(el => typeof el === 'number')
    .map(el => Number(el));
