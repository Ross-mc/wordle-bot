const inquirer = require('inquirer');
const { VALID_WORDS } = require('../words/getValidWords');


const getWord = async () => {
  const question = [
    {
      message: 'What is the 5 letter word that you want wordle-bot to guess?',
      type: 'input',
      name: 'word'
    }
  ]
  const {word} = await inquirer.prompt(question);

  if (!isWordValid(word)) {
    console.log("You must enter one of the 5 letter words that wordle accepts")
    return getWord()
  }

  return word
}

const isWordValid = (word) => {
  if (word.length !== 5){
    return false
  }

  return VALID_WORDS.includes(word)
}

module.exports = getWord