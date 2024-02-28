module.exports = {
  // other Jest configurations
  testResultsProcessor: 'jest-junit',
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
};