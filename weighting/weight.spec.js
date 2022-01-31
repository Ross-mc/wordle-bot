const {
  produceWeightedWords,
  produceArrayWithWordsMultipledByWeight,
} = require("./weighting");

const mockWords = ["hello", "valid", "words"];

describe("weighting.js", () => {
  it("produceWeightedWords should return an object with all the words present", () => {
    const result = produceWeightedWords(mockWords);
    expect(result.weightedWordObj).toHaveProperty("hello");
    expect(result.weightedWordObj).toHaveProperty("valid");
    expect(result.weightedWordObj).toHaveProperty("words");
    expect(typeof result.endWeight).toBe("number");
  });

  it("produceWeightedWords should return an object with each word weighted according to the letters present", () => {
    const result = produceWeightedWords(mockWords);
    const expected = {
      weightedWordObj: {
        hello: {
          word: "hello",
          weightEnd: 343,
          weightStart: 0,
        },
        valid: {
          word: "valid",
          weightEnd: 588,
          weightStart: 343,
        },
        words: {
          word: "words",
          weightEnd: 853,
          weightStart: 588,
        },
      },
      endWeight: 853,
    };
    expect(result).toEqual(expected);
  });
});
