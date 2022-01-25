const { VALID_WORDS } = require("../words/getValidWords");

let currentWords = [...VALID_WORDS];

let gameStatus = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  badLetters: [],
  misplacedLetters: {},
};

const guess = (targetWord) => {
  const randomIdx = Math.floor(Math.random() * currentWords.length);
  const randomGuess = currentWords[randomIdx];
  console.log(`The random guess was ${randomGuess}`);
  if (randomGuess === targetWord) {
    return true;
  }
  processIncorrectGuess(targetWord, randomGuess);
  return false;
};

const processIncorrectGuess = (targetWord, guessedWord) => {
  for (let i = 0; i < guessedWord.length; i++) {
    const currentLetter = guessedWord[i];
    if (targetWord[i] === currentLetter) {
      setCorrectlyPlacedLetter(i, currentLetter);
    } else {
      updateMisplacedAndBadLetters(targetWord, currentLetter, i.toString());
    }
  }
  currentWords = removeInvalidWords(currentWords, gameStatus);
};

const updateMisplacedAndBadLetters = (targetWord, currentLetter, position) => {
  if (targetWord.includes(currentLetter)) {
    if (gameStatus.misplacedLetters[currentLetter]) {
      gameStatus.misplacedLetters[currentLetter].push(position);
    } else {
      gameStatus.misplacedLetters[currentLetter] = [position];
    }
  } else if (!gameStatus.badLetters.includes(currentLetter)) {
    gameStatus.badLetters.push(currentLetter);
  }
};

const setCorrectlyPlacedLetter = (position, letter) => {
  gameStatus[position] = letter;
  gameStatus.misplacedLetters[letter] = undefined;
};

const removeInvalidWords = (currentWords, gameStatus) => {
  return currentWords.filter((word) => {
    if (filterWordIfDoesNotIncludeMisplacedLetter(word)) {
      return false;
    }
    for (let i = 0; i < word.length; i++) {
      const currentLetterOfPotentialWord = word[i];
      if (gameStatus.badLetters.includes(currentLetterOfPotentialWord)) {
        return false;
      }
      if (isLetterUnknown(gameStatus[i])) {
        continue;
      }
      if (
        !isCurrentLetterAMatchForKnownLetter(
          gameStatus[i],
          currentLetterOfPotentialWord
        )
      ) {
        return false;
      }
    }
    return true;
  });
};

const isLetterUnknown = (letter) => letter.length === 0;

const isCurrentLetterAMatchForKnownLetter = (knownLetter, currentLetter) =>
  knownLetter === currentLetter;

const filterWordIfDoesNotIncludeMisplacedLetter = (word) => {
  for (const letter in gameStatus.misplacedLetters) {
    if (!word.includes(letter)) {
      return true;
    }
    const invalidPositions = gameStatus.misplacedLetters[letter];
    if (invalidPositions) {
      for (const position of invalidPositions) {
        if (word[position] === letter) {
          return true;
        }
      }
    }
  }
};

const getCurrentGameStatus = () => {
  return gameStatus;
};

const resetGame = () => {
  gameStatus = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    badLetters: [],
    misplacedLetters: {},
  };
  currentWords = [...VALID_WORDS];
};

module.exports = {
  guess,
  processIncorrectGuess,
  getCurrentGameStatus,
  resetGame,
  removeInvalidWords,
};
