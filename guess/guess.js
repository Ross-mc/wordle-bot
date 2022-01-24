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
  console.log(`The random guess was ${randomGuess}`)
  if (randomGuess === targetWord){
    return true
  }
  processIncorrectGuess(targetWord, randomGuess)
  return false
}

const processIncorrectGuess = (targetWord, guessedWord) => {
  for (let i = 0; i<guessedWord.length; i++){
    const currentLetter = guessedWord[i]
    if (targetWord[i] === currentLetter){
      gameStatus[i] = currentLetter
      const idx = gameStatus.misplacedLetters.indexOf(currentLetter)
      if (idx !== -1){
        gameStatus.misplacedLetters.splice(idx, 1)
      }
    } else if (targetWord.includes(currentLetter)) {
      gameStatus.misplacedLetters.push(currentLetter)
    } else if (!gameStatus.badLetters.includes(currentLetter)) {
      gameStatus.badLetters.push(currentLetter)
    }
  }
  currentWords = removeInvalidWords(currentWords, gameStatus)
}

const removeInvalidWords = (currentWords, gameStatus) => {

  return currentWords.filter(word => {
    filterWordIfDoesNotIncludeMisplacedLetter(word)
    for (let i = 0; i<word.length; i++){
      const currentLetterOfPotentialWord = word[i];
      if (gameStatus.badLetters.includes(currentLetterOfPotentialWord)){
        return false
      }
      if (isLetterUnknown(gameStatus[i])){
        continue
      }
      if (!isCurrentLetterAMatchForKnownLetter(gameStatus[i], currentLetterOfPotentialWord)){
        return false
      }
    }
    return true
  })
  
}

const isLetterUnknown = (letter) => letter.length === 0

const isCurrentLetterAMatchForKnownLetter = (knownLetter, currentLetter) => knownLetter === currentLetter


const filterWordIfDoesNotIncludeMisplacedLetter = (word) => {
  for (const letter of gameStatus.misplacedLetters){
    if (!word.includes(letter)){
      return false
    }
  }
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
  removeInvalidWords
}