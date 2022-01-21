const inquirer = require('inquirer');


const getWord = async () => {
  const question = [
    {
      message: 'What is the world that you want wordle-bot to guess?',
      type: 'input',
      name: 'word'
    }
  ]
  const {word} = await inquirer.prompt(question);
  return word
}

module.exports = getWord