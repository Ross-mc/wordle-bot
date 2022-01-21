const getWord = require('./interact/getWord');

const main = async () => {
  const word = await getWord();
  console.log(word);
}

main()