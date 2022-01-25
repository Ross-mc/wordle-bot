const { letterWeights } = require("./weights");

const produceWeightedWords = (wordsArr) => {
  const weightedWordObj = {};
  for (const word of wordsArr){
    weightedWordObj[word] = {
      ...weightWord(word)
    }
  }
  return weightedWordObj
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

const produceArrayWithWordsMultipledByWeight = (currentWords, wordWeights) => {
  const multipliedWords = [];
  for (const word of currentWords){
    const {weight} = wordWeights[word];
    const arr = Array(weight);
    arr.fill(word);
    multipliedWords.push(...arr);
  }
  return multipliedWords
}

module.exports = {
  produceWeightedWords,
  produceArrayWithWordsMultipledByWeight
};
