const { letterWeights } = require("./weights");

const produceWeightedWords = (wordsArr) => {
  const weightedWordObj = {};
  let mostRecentWeight = 0;
  for (const word of wordsArr) {
    weightedWordObj[word] = {
      ...weightWord(word, mostRecentWeight),
    };
    mostRecentWeight = weightedWordObj[word].weightEnd;
  }
  return { weightedWordObj, endWeight: mostRecentWeight };
};

const weightWord = (word, currCount) => {
  let weight = 0;
  for (const letter of word) {
    weight += letterWeights[letter];
  }
  weightEnd = weight + currCount;
  return {
    word,
    weightEnd,
    weightStart: currCount,
  };
};

module.exports = {
  produceWeightedWords,
};
