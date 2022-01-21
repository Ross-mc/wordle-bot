const { VALID_WORDS } = require("../words/getValidWords");

const currentWords = [...VALID_WORDS];

const gameStatus = {
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

  return false
}

const processIncorrectGuess = (targetWord, guessedWord) => {
  for (let i = 0; i<guessedWord.length; i++){
    const currentLetter = guessedWord[i]
    if (targetWord[i] === currentLetter){
      gameStatus[i] = currentLetter
    }
  }
}

const getCurrentGameStatus = () => {
  return gameStatus
}
module.exports = {
  guess,
  processIncorrectGuess,
  getCurrentGameStatus
}