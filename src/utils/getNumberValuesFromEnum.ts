export const getNumberValuesFromEnum = (someEnum: object): number[] =>
  Object.values(someEnum)
    .filter(el => typeof el === 'number') // нужно, так как из Enum возвращаются ключи(строки) и их значения
    .map(el => Number(el));

type DataType = string | number;

export const getKeysAndValuesFromEnum = (someEnum: object): DataType[] =>
  Object.values(someEnum);
