const { letterWeights } = require("./weights");

const produceWeightedWords = (wordsArr) => {
  return wordsArr.map(weightWord);
};

const weightWord = (word) => {
  let weight = 0;
  for (const letter of word) {
    weight += letterWeights[letter];
  }
  return {
    word,
    weight,
  };
};

module.exports = {
  produceWeightedWords,
};
