const fs = require("fs");

const getValidWords = () => {
  const data = fs.readFileSync("./words.json", "utf8");
  return JSON.parse(data)
}

const VALID_WORDS = getValidWords();

Object.freeze(VALID_WORDS);

module.exports = {
  VALID_WORDS
}