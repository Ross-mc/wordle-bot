const inquirer = require("inquirer");
const getWord = require("./getWord");

jest.mock("fs");

describe("getWord.js", () => {
  it("should return the word given by prompt", async () => {
    const result = await getWord();
    expect(result).toBe("hello");
  });
});
