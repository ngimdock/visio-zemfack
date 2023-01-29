export const NUMBER_OF_FIRST_LETTERS = 2;

const FIRST_LETTER = 0;

export const getFirstTwoLetters = (name: string): string => {
  const result = "";

  const namesDiveded = name.split(" ");

  const firstTwoLetters = namesDiveded.reduce(
    (firstLettersAccumulator: string, currentWorld: string) => {
      if (firstLettersAccumulator.length === NUMBER_OF_FIRST_LETTERS)
        return firstLettersAccumulator;

      return firstLettersAccumulator + currentWorld.charAt(0);
    },
    ""
  );

  return firstTwoLetters;
};
