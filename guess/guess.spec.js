const { guess, getCurrentGameStatus, processIncorrectGuess } = require("./guess");

jest.mock('fs');

beforeEach(() => {
  jest.spyOn(global.Math, 'floor').mockReturnValue(1);
})

afterEach(() => {
  jest.spyOn(global.Math, 'floor').mockRestore();
})

describe('guess.js', () => {
  it('should return true if the word is correct',() => {
    
    const result = guess('valid');
    expect(result).toBeTruthy();
  })

  it('should return false if the word is incorrect',() => {
    
    const result = guess('words');
    expect(result).toBeFalsy();
  })

  it('processIncorrectGuess should correctly modify gameStatus', () => {
    const startGameStatus = {
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      badLetters: [],
      misplacedLetters: []
    }

    expect(startGameStatus).toEqual(getCurrentGameStatus());

    processIncorrectGuess('mocks', 'books')

    const afterGuessGameStatus = {
      '0': '',
      '1': 'o',
      '2': '',
      '3': 'k',
      '4': 's',
      badLetters: ['m', 'c'],
      misplacedLetters: []
    }
    expect(afterGuessGameStatus).toEqual(getCurrentGameStatus());
  })
})