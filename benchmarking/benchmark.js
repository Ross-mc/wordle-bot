const game = require("../playGame/playGame");
const { VALID_WORDS } = require("../words/getValidWords");

const benchmark = (targetWords) => {
  let sum = 0;
  let failsCount = 0;
  for (const word of targetWords) {
    const result = game.playGame(word);
    result !== -1 ? (sum += result) : failsCount++;
  }
  const successfulAttempts = targetWords.length - failsCount;
  const averageGuesses = (sum / successfulAttempts).toFixed(1);
  console.log(
    `After ${targetWords.length} games, wordle-bot had ${successfulAttempts} successful attempts with ${failsCount} fails. \nSuccessful attempts took an average of ${averageGuesses} guesses`
  );
  const successRate =
    ((successfulAttempts / targetWords.length) * 100).toFixed(1) + "%";
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
