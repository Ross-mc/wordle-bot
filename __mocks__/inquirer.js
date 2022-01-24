const inquirer = jest.createMockFromModule("inquirer");

const prompt = () =>
  Promise.resolve({
    word: "hello",
  });

inquirer.prompt = prompt;

module.exports = inquirer;
