const { produceWeightedWords, produceArrayWithWordsMultipledByWeight } = require("./weighting");

const mockWords = ["hello", "valid", "words"];

describe("weighting.js", () => {
  it("produceWeightedWords should return an object with all the words present", () => {
    const result = produceWeightedWords(mockWords);
    expect(result).toHaveProperty('hello');
    expect(result).toHaveProperty('valid');
    expect(result).toHaveProperty('words');
  });

  it("produceWeightedWords should return an object with each word weighted according to the letters present", () => {
    const result = produceWeightedWords(mockWords);
    const expected = {
      hello: {
        word: "hello",
        weight: 343,
      },
      valid :{
        word: "valid",
        weight: 245,
      },
      words:{
        word: "words",
        weight: 265,
      },
    };
    expect(result).toEqual(expected);
  });

  it("produceArrayWithWordsMultipledByWeight should return an array with all the values multiplied", () => {
    const weightedWords = produceWeightedWords(mockWords);
    const result = produceArrayWithWordsMultipledByWeight(mockWords, weightedWords)
    expect(result).toHaveLength(853);
    expect(result[0]).toBe('hello');
    expect(result[50]).toBe('hello');
    expect(result[342]).toBe('hello');
    expect(result[343]).toBe('valid');
    expect(result[587]).toBe('valid');
    expect(result[588]).toBe('words');
    expect(result[852]).toBe('words');
  });
});
