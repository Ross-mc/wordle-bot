const { letterWeights } = require("./weights");

const produceWeightedWords = (wordsArr) => {
  return wordsArr.reduce((weightedWordObj, word) => {
    return {
      ...weightedWordObj,
      [word]: {
        ...weightWord(word)
      }
    }
  },{});
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

const produceArrayWithWordsMultipledByWeight = (currentWords, weightedWords) => {
  const multipliedWords = [];
  for (const word of currentWords){
    const {weight} = weightedWords[word];
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