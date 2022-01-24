const getWord = require("./interact/getWord");
const { playGame } = require("./playGame/playGame");

const main = async () => {
  const word = await getWord();
  playGame(word);
};

main();
