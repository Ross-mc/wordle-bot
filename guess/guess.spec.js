const {
  guess,
  getCurrentGameStatus,
  processIncorrectGuess,
  resetGame,
  removeInvalidWords,
} = require("./guess");

jest.mock("fs");

beforeEach(() => {
  jest.spyOn(global.Math, "floor").mockReturnValue(343);
});

afterEach(() => {
  jest.spyOn(global.Math, "floor").mockRestore();
  resetGame();
});

describe("guess.js", () => {
  it("should return true if the word is correct", () => {
    const result = guess("valid");
    expect(result).toBeTruthy();
  });

  it("should return false if the word is incorrect", () => {
    const result = guess("words");
    expect(result).toBeFalsy();
  });

  it("processIncorrectGuess should correctly modify gameStatus", () => {
    const startGameStatus = {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      badLetters: [],
      misplacedLetters: {},
    };

    expect(startGameStatus).toEqual(getCurrentGameStatus());

    processIncorrectGuess("earth", "baths");

    const afterGuessGameStatus = {
      0: "",
      1: "a",
      2: "",
      3: "",
      4: "",
      badLetters: ["b", "s"],
      misplacedLetters: {
        t: ["2"],
        h: ["3"],
      },
    };
    expect(afterGuessGameStatus).toEqual(getCurrentGameStatus());
  });

  it("processIncorrectGuess should correctly modify gameStatus when given misplaced letters", () => {
    processIncorrectGuess("arise", "route");

    const afterGuessGameStatus = {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "e",
      badLetters: ["o", "u", "t"],
      misplacedLetters: {
        r: ["0"],
      },
    };
    expect(afterGuessGameStatus).toEqual(getCurrentGameStatus());
  });

  it("processIncorrectGuess should remove misplaced letters after they have been correctly placed", () => {
    processIncorrectGuess("arise", "route");

    processIncorrectGuess("arise", "price");

    const afterGuessGameStatus = {
      0: "",
      1: "r",
      2: "i",
      3: "",
      4: "e",
      badLetters: ["o", "u", "t", "p", "c"],
      misplacedLetters: {},
    };
    expect(afterGuessGameStatus).toEqual(getCurrentGameStatus());
  });

  it("removeInvalidWords should remove invalid words", () => {
    processIncorrectGuess("words", "cords");

    const afterGuessValidWords = ["words"];
    const result = removeInvalidWords(
      ["hello", "valid", "words"],
      getCurrentGameStatus()
    );
    expect(result).toEqual(afterGuessValidWords);
  });

  it("removeInvalidWords should remove words where at least one misplace letter is in the wrong spot", () => {
    processIncorrectGuess("words", "dwors");
    processIncorrectGuess("words", "dwors");

    const afterGuessValidWords = ["words"];
    const result = removeInvalidWords(
      ["hello", "valid", "words", "dwors"],
      getCurrentGameStatus()
    );
    expect(result).toEqual(afterGuessValidWords);
  });
});
