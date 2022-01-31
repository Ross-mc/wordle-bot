const game = require("../playGame/playGame");
const { VALID_WORDS } = require("../words/getValidWords");

const benchmark = (targetWords) => {
  let sum = 0;
  let failsCount = 0;
  const endIndexOfWordsThatWillBeUsed = 2315
  for(let i = 0; i<endIndexOfWordsThatWillBeUsed; i++ ) {
    const word = targetWords[i]
    const result = game.playGame(word);
    result !== -1 ? (sum += result) : failsCount++;
  }
  const successfulAttempts = endIndexOfWordsThatWillBeUsed - failsCount;
  const averageGuesses = (sum / successfulAttempts).toFixed(1);
  console.log(
    `After ${endIndexOfWordsThatWillBeUsed} games, wordle-bot had ${successfulAttempts} successful attempts with ${failsCount} fails. \nSuccessful attempts took an average of ${averageGuesses} guesses`
  );
  const successRate =
    ((successfulAttempts / endIndexOfWordsThatWillBeUsed) * 100).toFixed(1) + "%";
  console.log(`This is a success rate of ${successRate}`);
  return {
    sum,
    failsCount,
    successfulAttempts,
    averageGuesses,
    successRate,
  };
};

benchmark(VALID_WORDS);
