const { guess, resetGame } = require("../guess/guess");

const playGame = (targetWord) => {
  let guesses = 1;
  let successfulGuess = guess(targetWord);
  logResult(successfulGuess, guesses);
  while (!successfulGuess && guesses < 6) {
    successfulGuess = guess(targetWord);
    guesses++;
    logResult(successfulGuess, guesses);
  }
  resetGame();
  return successfulGuess ? guesses : -1;
};

const logResult = (successfulGuess, guesses) =>
  successfulGuess
    ? console.log(`Wordle-bot got the word in ${guesses} attempts`)
    : console.log(`Wordle-bot has had ${guesses} attempts`);

const game = {
  playGame,
};

module.exports = game;
