// как проверить её тестом ?
export const mixArrayItems = <T>(array: T[]): T[] => {
  const copyArray = [...array];

  const newArray = [];

  const ONE_ITEM = 1;

  while (copyArray.length) {
    const randomNumber = Math.floor(Math.random() * copyArray.length);
    newArray.push(copyArray[randomNumber]);
    copyArray.splice(randomNumber, ONE_ITEM);
  }
  return newArray;
};
