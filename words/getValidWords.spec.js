const { getValidWords } = require("./getValidWords");

jest.mock("fs");
describe("getValidWords", () => {
  it('should return array of length 3 with -> "hello","valid","words"', () => {
    const result = getValidWords();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(3);
    expect(result[2]).toBe("words");
  });
});
