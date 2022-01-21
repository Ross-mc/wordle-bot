const { VALID_WORDS } = require("../words/getValidWords");

let currentWords = [...VALID_WORDS];

let gameStatus = {
  '0': '',
  '1': '',
  '2': '',
  '3': '',
  '4': '',
  badLetters: [],
  misplacedLetters: []
}

const guess = (targetWord) => {
  const randomIdx = Math.floor(Math.random() * currentWords.length);
  const randomGuess = currentWords[randomIdx];
  if (randomGuess === targetWord){
    return true
  }
  processIncorrectGuess()
  return false
}

const processIncorrectGuess = (targetWord, guessedWord) => {
  for (let i = 0; i<guessedWord.length; i++){
    const currentLetter = guessedWord[i]
    if (targetWord[i] === currentLetter){
      gameStatus[i] = currentLetter
    }
  }
  removeInvalidWords()
}

const removeInvalidWords = () => {
  currentWords = currentWords.filter(word => {
    //loop through the word
    //if the current letter does not match gamestatus letter return false
    //also if the word contains a bad letter return false
    //also if the word does not contain the misplaced letters
    for (const letter of gameStatus.misplacedLetters){
      if (!word.includes(letter)){
        return false
      }
    }
    for (let i = 0; i<word.length; i++){
      const currentLetter = word[i];
      if (gameStatus.badLetters.includes(currentLetter)){
        return false
      }
      if (!gameStatus[i]){
        continue
      }
      if (gameStatus[i] !== currentLetter){
        return false
      }
    }
  })
}
const getCurrentGameStatus = () => {
  return gameStatus
}

const resetGame = () => {
  gameStatus = {
    '0': '',
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    badLetters: [],
    misplacedLetters: []
  }
}

module.exports = {
  guess,
  processIncorrectGuess,
  getCurrentGameStatus,
  resetGame,
  currentWords
}