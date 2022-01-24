"use strict";

const path = require("path");

const fs = jest.createMockFromModule("fs");

function readFileSync() {
  const mockWords = ["hello", "valid", "words"];
  return JSON.stringify(mockWords);
}

fs.readFileSync = readFileSync;

module.exports = fs;
