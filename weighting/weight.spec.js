const { produceWeightedWords } = require("./weighting");

const mockWords = ["hello", "valid", "words"];

describe("weighting.js", () => {
  it("produceWeightedWords should return an array of equal length to the original array", () => {
    const result = produceWeightedWords(mockWords);
    expect(result).toHaveLength(3);
  });

  it("produceWeightedWords should return an array with each word weighted according to the letters present", () => {
    const result = produceWeightedWords(mockWords);
    const expected = [
      {
        word: "hello",
        weight: 343,
      },
      {
        word: "valid",
        weight: 245,
      },
      {
        word: "words",
        weight: 265,
      },
    ];
    expect(result).toEqual(expected);
  });
});
